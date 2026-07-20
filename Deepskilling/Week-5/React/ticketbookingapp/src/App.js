import React, { useState } from 'react';
import GuestView from './Components/GuestView';
import UserView from './Components/UserView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Flight Ticket Booking Portal</h2>
      <div style={{ marginBottom: '20px' }}>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#d9534f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5cb85c',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        )}
      </div>

      {isLoggedIn ? <UserView /> : <GuestView />}
    </div>
  );
}

export default App;
