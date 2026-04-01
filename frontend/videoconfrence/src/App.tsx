// App.js
import { useState } from 'react';
import ModernVideoRoom from './Components/ModernVideoRoom';
import './App.css';

function App() {
  // const [joined, setJoined] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [role, setRole] = useState('STUDENT');
  const location = window.location

  const values = new URLSearchParams(location.search)
  const classId: string = values.get('classId') as string;
  const tokens: string = values.get('token') as string;

  if (classId && tokens) {
    return (
      <ModernVideoRoom
        sessionId={sessionId}
        participantName={participantName}
        role={role}
        token={tokens}
        classId={classId}
      />
    );
  }

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-content">
          <div className="logo">
            <div className="logo-icon">🎓</div>
            <h1>Virtual Classroom</h1>
            <p>Professional video conferencing for education</p>
          </div>
          
          <form  className="join-form">
            <div className="form-group">
              <label>Meeting ID or Class Code</label>
              <input
                type="text"
                value={sessionId}
                onChange={(e) => setSessionId(e.target.value)}
                placeholder="Enter class code"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Join as</label>
              <div className="role-selector">
                <button
                  type="button"
                  className={`role-button ${role === 'STUDENT' ? 'active' : ''}`}
                  onClick={() => setRole('STUDENT')}
                >
                  🎓 Student
                </button>
                <button
                  type="button"
                  className={`role-button ${role === 'STAFF' ? 'active' : ''}`}
                  onClick={() => setRole('STAFF')}
                >
                  👨‍🏫 Teacher
                </button>
              </div>
            </div>
            
            <button type="submit" className="join-button">
              Join Meeting
            </button>
          </form>
          
          <div className="features">
            <div className="feature">
              <span>🎥</span>
              <p>HD Video</p>
            </div>
            <div className="feature">
              <span>🎤</span>
              <p>Clear Audio</p>
            </div>
            <div className="feature">
              <span>💬</span>
              <p>Live Chat</p>
            </div>
            <div className="feature">
              <span>🖥️</span>
              <p>Screen Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;