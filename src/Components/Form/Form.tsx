import React from 'react';
import EqualEmployment from '../EqualEmployment/EqualEmployment';
import Input from '../Input/Input';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  fullName: yup.string().min(10).required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  linkedinURL: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
  twitterURL: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
  githubURL: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
  portfolioURL: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
  otherWebsite: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
})

const Form: React.FC = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data: object) => {
    console.log(data);
  }

  return (
    <div className='form-container'>
      <form className='mx-auto' onSubmit={handleSubmit(submitForm)}>

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

          <p>{errors.fullName?.message}</p>
          <Input
            ref={register}
            label='Full name'
            name='fullName'
            isReq={true}
          />
          <Input
            ref={register}
            label='Email'
            name='email'
            isReq={true}
          />
          <Input
            ref={register}
            label='Phone'
            name='phone'
            isReq={false}
          />
          <Input
            ref={register}
            label='Company'
            name='company'
            isReq={false}
          />
        </div>

        <h4>LINKS</h4>
        <div className="row my-4">
          <Input
            ref={register}
            label='Linkedin URL'
            name='linkedinURL'
            isReq={false}
          />
          <Input
            ref={register}
            label='Twitter URL'
            name='twitterURL'
            isReq={false}
          />
          <Input
            ref={register}
            label='GitHub URL'
            name='githubURL'
            isReq={false}
          />
          <Input
            ref={register}
            label='Portfolio URL'
            name='portfolioURL'
            isReq={false}
          />
          <Input
            ref={register}
            label='Other website'
            name='otherWebsite'
            isReq={false}
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
          <button
            type='submit'
            className='submit-button mx-auto'
          >
            SUBMIT APPLICATION
          </button>
        </div>

      </form>
    </div>
  );
}

export default Form;