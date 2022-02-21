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

      <footer className='d-flex flex-column align-items-center'>
        <div className='pt-5'>
          <a className='homepage-link'>Render Home Page</a>
        </div>
        <div className='pt-5'>
          Jobs Powered by&nbsp;&nbsp;&nbsp;
          <img src='/images/lever-logo.svg' height='24'/>
        </div>
      </footer>
    </div>
  );
}

export default App;
