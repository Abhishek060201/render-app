import React from 'react';
import Form from './Components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <img style={{ cursor: 'pointer' }} className='my-3' src='images/logo.png' height='77' />
      </div>
      <div className='px-sm-3 px-md-5 py-3'>
        <h1>Full-Stack Engineer</h1>
        <div
          className='my-4 d-sm-flex'
          style={{ 
            color: 'var(--light-gray)', 
            fontSize: '0.88rem', 
            fontWeight: '600',
            letterSpacing: '0.1rem'
          }}
        >
          <div>REMOTE OPTIONAL /&nbsp;</div>
          <div>PRODUCT – ENGINEERING /&nbsp;</div>
          <div>FULL-TIME</div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
