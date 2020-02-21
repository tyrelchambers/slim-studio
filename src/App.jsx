import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
     <h1 style={{
       fontWeight: '800',
       fontSize: '5rem'
     }}>Slim Studio</h1>
     <div className="d-f">
       <Link to="/privacy-policy">Privacy Policy</Link>
     </div>
    </div>
  );
}

export default App;
