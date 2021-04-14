import React from 'react';
import './App.css';
import EmailValidator from './EmailValidator';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Email Validator</h2>
      </header>
      <main>
        <EmailValidator />
      </main>
    </div>
  );
}

export default App;
