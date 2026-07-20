import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name="John Doe" School="Greenwood High" Total={285} goal={300} />
    </div>
  );
}

export default App;
