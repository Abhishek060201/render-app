import React from 'react';
import Form from './Components/Form/Form';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      
      <header>
        <a href='www.render.com/jobs'>
          <img
            className='my-3'
            src='images/logo.png'
            height='77'
          />
        </a>
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
          <a className='render-homepage' href=''>Render Home Page</a>
        </div>
        <div className='pt-5'>
          <a className='lever-homepage' href='lever.co'>
            Jobs Powered by&nbsp;&nbsp;&nbsp;
            <img src='/images/lever-logo.svg' height='24' />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
