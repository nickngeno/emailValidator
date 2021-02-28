import React from 'react';
import './App.css';
import EmailValidator from './EmailValidator';

function App() {
  return (
    <div className="App">
      
      <header>
        <h2>Email Validator using</h2>
        <span style ={{fontFamily:'cursive',
  color: "rgb(169, 254, 129)", fontSize: "2rem"}}>TypeScript</span>
      </header>
      <main>
        <EmailValidator />
      </main>
    </div>
  );
}

export default App;
