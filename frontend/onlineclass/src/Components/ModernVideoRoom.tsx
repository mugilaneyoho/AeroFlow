// ModernVideoRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import './VideoConference.css'; // We'll create this

const ModernVideoRoom = ({ sessionId, participantName, role }) => {
  const [ov, setOv] = useState(null);
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const publisherRef = useRef(null);
  const chatEndRef = useRef(null);
  const videoContainerRef = useRef(null);
  const durationIntervalRef = useRef(null);

  // Call duration timer
  useEffect(() => {
    durationIntervalRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    
    return () => {
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
    };
  }, []);

  // Format duration (HH:MM:SS)
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let isMounted = true;

    const joinSession = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/classroom/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            participantName,
            role,
            mode: 'interactive',
          }),
        });

        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || 'Failed to join');
        }

        const { OpenVidu } = await import('openvidu-browser');
        
        if (!isMounted) return;

        const OV = new OpenVidu();
        const mySession = OV.initSession();
        
        setOv(OV);
        setSession(mySession);

        // Handle new streams
        mySession.on('streamCreated', (event) => {
          const subscriber = mySession.subscribe(event.stream, undefined);
          if (isMounted) {
            // Parse participant info
            let participantInfo = { name: 'Anonymous', role: 'STUDENT' };
            try {
              if (event.stream.connection.data) {
                participantInfo = JSON.parse(event.stream.connection.data);
              }
            } catch (e) {}
            
            setParticipants(prev => [...prev, {
              id: event.stream.streamId,
              connectionId: event.stream.connection.connectionId,
              name: participantInfo.name,
              role: participantInfo.role,
              subscriber: subscriber,
              isLocal: false,
              audioEnabled: true,
              videoEnabled: true
            }]);
          }
        });

        mySession.on('streamDestroyed', (event) => {
          if (isMounted) {
            setParticipants(prev => prev.filter(p => p.id !== event.stream.streamId));
          }
        });

        // Handle chat messages (custom signaling)
        mySession.on('signal:chat', (event) => {
          const message = JSON.parse(event.data);
          setMessages(prev => [...prev, {
            ...message,
            timestamp: new Date(),
            isOwn: false
          }]);
        });

        // Connect to session
        await mySession.connect(data.token, { clientData: participantName });

        // Publish local stream
        const publisher = await OV.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '1280x720',
          frameRate: 30,
        });
        
        if (isMounted) {
          setPublisher(publisher);
          setIsAudioEnabled(true);
          setIsVideoEnabled(true);
          mySession.publish(publisher);
          
          // Add local participant
          setParticipants(prev => [{
            id: 'local',
            connectionId: mySession.connection.connectionId,
            name: participantName,
            role: role,
            subscriber: null,
            isLocal: true,
            publisher: publisher,
            audioEnabled: true,
            videoEnabled: true
          }, ...prev]);
        }

        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error joining session:', err);
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    joinSession();

    return () => {
      isMounted = false;
      if (session) {
        session.disconnect();
      }
    };
  }, [sessionId, participantName, role]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleAudio = () => {
    if (publisher) {
      publisher.publishAudio(!isAudioEnabled);
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const toggleVideo = () => {
    if (publisher) {
      publisher.publishVideo(!isVideoEnabled);
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const screenPublisher = await ov.initPublisherAsync(undefined, {
          videoSource: screenStream.getVideoTracks()[0],
          audioSource: false,
          publishAudio: false,
          publishVideo: true,
        });
        
        session.unpublish(publisher);
        session.publish(screenPublisher);
        setPublisher(screenPublisher);
        setIsScreenSharing(true);
        
        screenStream.getVideoTracks()[0].onended = () => {
          stopScreenShare();
        };
      } catch (error) {
        console.error('Error sharing screen:', error);
      }
    } else {
      stopScreenShare();
    }
  };

  const stopScreenShare = async () => {
    const newPublisher = await ov.initPublisherAsync(undefined, {
      audioSource: undefined,
      videoSource: undefined,
      publishAudio: isAudioEnabled,
      publishVideo: isVideoEnabled,
      resolution: '1280x720',
    });
    
    session.unpublish(publisher);
    session.publish(newPublisher);
    setPublisher(newPublisher);
    setIsScreenSharing(false);
  };

  const sendMessage = () => {
    if (newMessage.trim() && session) {
      const message = {
        name: participantName,
        role: role,
        message: newMessage,
        timestamp: new Date()
      };
      
      session.signal({
        data: JSON.stringify(message),
        type: 'chat'
      });
      
      setMessages(prev => [...prev, { ...message, isOwn: true }]);
      setNewMessage('');
    }
  };

  const leaveCall = () => {
    if (session) {
      session.disconnect();
    }
    window.close();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getParticipantCount = () => {
    return participants.length;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>Joining the meeting...</h2>
        <p>Please wait while we connect you</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">❌</div>
        <h2>Unable to join the meeting</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="video-conference" ref={videoContainerRef}>
      {/* Header */}
      <div className="conference-header">
        <div className="meeting-info">
          <h1>Virtual Classroom</h1>
          <div className="meeting-details">
            <span className="meeting-code">{sessionId}</span>
            <span className="participant-count">
              👥 {getParticipantCount()} participant{getParticipantCount() !== 1 ? 's' : ''}
            </span>
            <span className="duration">⏱️ {formatDuration(callDuration)}</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}>
            👥
          </button>
          <button className="icon-button" onClick={() => setIsChatOpen(!isChatOpen)}>
            💬
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${isChatOpen ? 'chat-open' : ''}`}>
        {/* Video Grid */}
        <div className="video-grid">
          {participants.map((participant) => (
            <div key={participant.id} className="video-tile">
              {participant.isLocal ? (
                <video
                  autoPlay
                  muted
                  className="video-element"
                  ref={el => {
                    if (el && participant.publisher && participant.publisher.addVideoElement) {
                      participant.publisher.addVideoElement(el);
                    }
                  }}
                />
              ) : (
                <video
                  autoPlay
                  className="video-element"
                  ref={el => {
                    if (el && participant.subscriber && participant.subscriber.addVideoElement) {
                      participant.subscriber.addVideoElement(el);
                    }
                  }}
                />
              )}
              <div className="participant-info">
                <div className="participant-name">
                  {participant.name}
                  {participant.role === 'STAFF' && <span className="host-badge">👑 Host</span>}
                  {participant.isLocal && <span className="you-badge">You</span>}
                </div>
                <div className="participant-status">
                  {!participant.audioEnabled && <span className="muted-badge">🔇</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Panel */}
        {isChatOpen && (
          <div className="chat-panel">
            <div className="chat-header">
              <h3>Meeting Chat</h3>
              <button className="close-button" onClick={() => setIsChatOpen(false)}>×</button>
            </div>
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.isOwn ? 'own' : ''}`}>
                  <div className="message-header">
                    <strong>{msg.name}</strong>
                    {msg.role === 'STAFF' && <span className="role-badge">Teacher</span>}
                    <span className="message-time">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="message-text">{msg.message}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Send a message to everyone..."
                className="chat-input"
              />
              <button onClick={sendMessage} className="send-button">Send</button>
            </div>
          </div>
        )}

        {/* Participants Panel */}
        {isParticipantsOpen && (
          <div className="participants-panel">
            <div className="participants-header">
              <h3>Participants ({getParticipantCount()})</h3>
              <button className="close-button" onClick={() => setIsParticipantsOpen(false)}>×</button>
            </div>
            <div className="participants-list">
              {participants.map((participant) => (
                <div key={participant.id} className="participant-item">
                  <div className="participant-avatar">
                    {participant.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="participant-details">
                    <div className="participant-name-detail">
                      {participant.name}
                      {participant.role === 'STAFF' && <span className="host-tag">Host</span>}
                    </div>
                    <div className="participant-status-icons">
                      {!participant.audioEnabled && <span>🔇</span>}
                      {!participant.videoEnabled && <span>📹</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Controls Bar */}
      <div className="controls-bar">
        <div className="controls-left">
          <button className="control-button" onClick={toggleAudio}>
            {isAudioEnabled ? '🎤' : '🔇'}
            <span>{isAudioEnabled ? 'Mute' : 'Unmute'}</span>
          </button>
          <button className="control-button" onClick={toggleVideo}>
            {isVideoEnabled ? '📹' : '🚫'}
            <span>{isVideoEnabled ? 'Stop Video' : 'Start Video'}</span>
          </button>
          <button className="control-button" onClick={toggleScreenShare}>
            {isScreenSharing ? '🖥️' : '💻'}
            <span>{isScreenSharing ? 'Stop Share' : 'Share Screen'}</span>
          </button>
        </div>
        
        <div className="controls-center">
          <button className="control-button leave-button" onClick={leaveCall}>
            📞
            <span>Leave Call</span>
          </button>
        </div>
        
        <div className="controls-right">
          <button className="control-button" onClick={toggleFullscreen}>
            🖥️
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>
          <button className="control-button">
            ⚙️
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernVideoRoom;