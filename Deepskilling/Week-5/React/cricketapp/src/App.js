import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Indian Cricket Team Portal</h2>
      <button
        onClick={() => setFlag(!flag)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Toggle View (Current Flag: {flag ? 'true' : 'false'})
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
