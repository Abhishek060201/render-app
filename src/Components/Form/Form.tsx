import React from 'react';
import EqualEmployment from '../EqualEmployment/EqualEmployment';
import Input from '../Input/Input';
import './Form.css';

const Form: React.FC = (): JSX.Element => {
  return (
    <div className='form-container'>
      <form className='mx-auto' >

        <h4>SUBMIT YOUR APPLICATION</h4>
        <div className="row my-4">
          <Input
            label='Full name'
          />
          <Input
            label='Email'
          />
          <Input
            label='Phone'
          />
          <Input
            label='Company'
          />
        </div>

        <h4>LINKS</h4>
        <div className="row my-4">
          <Input
            label='Linkedin URL'
          />
          <Input
            label='Twitter URL'
          />
          <Input
            label='GitHub URL'
          />
          <Input
            label='Portfolio URL'
          />
          <Input
            label='Other website'
          />
        </div>

        <h4>PREFERRED PRONOUNS</h4>
        <div className="row my-4x">
          <label>If you'd like, please share your pronouns with us.</label>
          <div>
            <input placeholder='Type your response' />
          </div>
        </div>

        <h4>ADDITIONAL INFORMATION</h4>
        <textarea placeholder='Add a cover letter or anything else you want to share.' />

        <hr></hr>

        <EqualEmployment />

        
      </form>
    </div>
  );
}

export default Form;