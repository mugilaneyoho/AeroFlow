// InteractiveVideoRoom.jsx - Everyone can speak and interact
import React, { useState, useEffect, useRef } from 'react';

const InteractiveVideoRoom = ({ sessionId, participantName, role }) => {
  const [ov, setOv] = useState(null);
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(true); // Auto-publish in interactive mode
  const publisherRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const joinSession = async () => {
      try {
        // Get token from backend - interactive mode
        const response = await fetch('http://localhost:3000/api/classroom/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            participantName,
            role,
            mode: 'interactive', // Confirm interactive mode
          }),
        });

        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || 'Failed to join');
        }

        // Load OpenVidu
        const { OpenVidu } = await import('openvidu-browser');
        
        if (!isMounted) return;

        const OV = new OpenVidu();
        const mySession = OV.initSession();
        
        setOv(OV);
        setSession(mySession);

        // Handle new streams - in interactive mode, subscribe to ALL streams
        mySession.on('streamCreated', (event) => {
          console.log('New stream created:', event.stream.connection.data);
          
          // Subscribe to all streams in interactive mode
          const subscriber = mySession.subscribe(event.stream, undefined);
          if (isMounted) {
            setSubscribers(prev => [...prev, subscriber]);
          }
        });

        mySession.on('streamDestroyed', (event) => {
          if (isMounted) {
            setSubscribers(prev => prev.filter(
              sub => sub.stream.streamId !== event.stream.streamId
            ));
          }
        });

        // Connect to session
        await mySession.connect(data.token, { clientData: participantName });

        // In interactive mode, EVERYONE publishes their video/audio
        const publisher = await OV.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
          frameRate: 30,
        });
        
        if (isMounted) {
          setPublisher(publisher);
          setIsPublishing(true);
          mySession.publish(publisher);
        }

        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error joining interactive session:', err);
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

  const togglePublish = async () => {
    if (!ov || !session) return;

    if (isPublishing) {
      // Stop publishing
      if (publisher) {
        session.unpublish(publisher);
        setIsPublishing(false);
        setPublisher(null);
      }
    } else {
      // Start publishing
      try {
        const newPublisher = await ov.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
        });
        
        setPublisher(newPublisher);
        setIsPublishing(true);
        session.publish(newPublisher);
      } catch (error) {
        console.error('Error publishing:', error);
      }
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Joining interactive classroom...</h2>
        <p>Everyone can speak and interact!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2>🎤 Interactive Classroom: {sessionId}</h2>
        <p>You are: <strong>{participantName}</strong> ({role})</p>
        <p style={{ color: '#4CAF50' }}>✨ Interactive Mode - Everyone can speak and share video ✨</p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* Your own video if publishing */}
        {isPublishing && publisher && (
          <div style={{ border: '3px solid #4CAF50', borderRadius: '8px', padding: '10px' }}>
            <h3>📹 {participantName} (You)</h3>
            <video 
              autoPlay 
              muted 
              style={{ width: '100%', borderRadius: '4px' }}
              ref={el => {
                if (el && publisher && publisher.addVideoElement) {
                  publisher.addVideoElement(el);
                }
              }} 
            />
          </div>
        )}

        {/* Other participants' videos */}
        {subscribers.map((sub, index) => {
          let participantInfo = { name: `Participant ${index + 1}`, role: 'STUDENT' };
          try {
            if (sub.stream.connection.data) {
              participantInfo = JSON.parse(sub.stream.connection.data);
            }
          } catch (e) {}
          
          return (
            <div key={sub.stream.streamId} style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '10px' }}>
              <h3>
                {participantInfo.role === 'STAFF' ? '👨‍🏫 Teacher' : '👨‍🎓 Student'} 
                {participantInfo.name}
              </h3>
              <video 
                autoPlay 
                style={{ width: '100%', borderRadius: '4px' }}
                ref={el => {
                  if (el && sub && sub.addVideoElement) {
                    sub.addVideoElement(el);
                  }
                }} 
              />
            </div>
          );
        })}
      </div>

      {/* Interactive Controls */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button 
          onClick={togglePublish}
          style={{ 
            margin: '0 10px', 
            padding: '12px 24px',
            backgroundColor: isPublishing ? '#f44336' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {isPublishing ? '🔴 Stop Speaking' : '🟢 Start Speaking'}
        </button>
        
        {isPublishing && publisher && (
          <>
            <button 
              onClick={() => publisher.publishAudio(!publisher.audioActive)}
              style={{ 
                margin: '0 10px', 
                padding: '12px 24px',
                backgroundColor: publisher.audioActive ? '#ff9800' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {publisher.audioActive ? '🔊 Mute' : '🔇 Unmute'}
            </button>
            <button 
              onClick={() => publisher.publishVideo(!publisher.videoActive)}
              style={{ 
                margin: '0 10px', 
                padding: '12px 24px',
                backgroundColor: publisher.videoActive ? '#ff9800' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {publisher.videoActive ? '📹 Stop Video' : '🎥 Start Video'}
            </button>
          </>
        )}
      </div>

      {/* Interactive Features Info */}
      <div style={{ marginTop: '30px', padding: '15px', background: '#f0f8ff', borderRadius: '8px', textAlign: 'center' }}>
        <h4>🎉 Interactive Features</h4>
        <p>✅ Everyone can speak and share video</p>
        <p>✅ Perfect for discussions, Q&A, and group work</p>
        <p>✅ Click "Start Speaking" to join the conversation</p>
      </div>
    </div>
  );
};

export default InteractiveVideoRoom;