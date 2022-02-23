import React from 'react';
import EqualEmployment from '../EqualEmployment/EqualEmployment';
import Input from '../Input/Input';
import ReCAPTCHA from "react-google-recaptcha";
import './Form.css';

const Form: React.FC = (): JSX.Element => {
  return (
    <div className='form-container'>
      <form className='mx-auto' >

        <h4>SUBMIT YOUR APPLICATION</h4>

        <div className="row my-4">
          <div className="row d-flex align-items-center">
            <label className='resume-label col-md-3'>Resume/CV</label>
            <div className='col-md-9 my-4 my-md-3'>
              <button
                className='attach-button'
              >
                <i className="fa-solid fa-paperclip"></i>
                ATTACH RESUME/CV
              </button>
            </div>
          </div>
          <Input
            isRequired={true}
            label='Full name'
          />
          <Input
            isRequired={true}
            label='Email'
          />
          <Input
            isRequired={false}
            label='Phone'
          />
          <Input
            isRequired={false}
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

        <h4 className='my-5'>PREFERRED PRONOUNS</h4>
        <div className="row">
          <label className='mb-4'>If you'd like, please share your pronouns with us.</label>
          <div className='mb-5'>
            <input placeholder='Type your response' />
          </div>
        </div>

        <h4 className='my-5'>ADDITIONAL INFORMATION</h4>
        <textarea placeholder='Add a cover letter or anything else you want to share.' />

        <hr className='my-5'></hr>

        <EqualEmployment />

        <div className='recaptcha-wrapper'>
          <ReCAPTCHA
            className="my-4"
            sitekey="6LcMq5QeAAAAAMnnojI5eJvtIzoTz_rm5noVnuJm"
          />
        </div>

        <div className='d-flex'>
          <button className='submit-button mx-auto'>SUBMIT APPLICATION</button>
        </div>

      </form>
    </div>
  );
}

export default Form;