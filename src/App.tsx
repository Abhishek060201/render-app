import React from 'react';
import Form from './Components/Form/Form';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <header>
        <img className='my-3' src='images/logo.png' height='77' />
      </header>

      <section className='py-3 mx-md-auto'>
        <h1>Full-Stack Engineer</h1>
        <div className='my-4 d-sm-flex'>
          <div>REMOTE OPTIONAL /&nbsp;</div>
          <div>PRODUCT – ENGINEERING /&nbsp;</div>
          <div>FULL-TIME</div>
        </div>
      </section>

      <Form />
    </div>
  );
}

export default App;
