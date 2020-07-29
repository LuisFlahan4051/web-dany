import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%); <-- CSS */}
      <svg>
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill='#00f6ff'/>
      </svg>
      
      
      <div className="animacion"></div>
    </div>
  );
}

export default App;
