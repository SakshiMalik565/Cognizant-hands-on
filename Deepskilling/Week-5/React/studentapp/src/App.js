import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Student Management Portal</h2>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
