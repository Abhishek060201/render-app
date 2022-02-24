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
  fullName: yup.string()
    .required('Please Fill in this Field')
    .min(10),
  email: yup.string()
    .required()
    .email(),
  phone: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid'),
  linkedinURL: yup.string()
    .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!'),
})

const Form: React.FC = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: object) => {
    console.log(data);
  }

  const selectFile = (e: React.MouseEvent) => {
    const fileInput = document.getElementById('attach-file');
    fileInput?.click();
    console.log(e.target);
  }

  return (
    <div className='form-container'>
      <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>

        <h4>SUBMIT YOUR APPLICATION</h4>

        <div className="row my-4">
          <div className="row d-flex align-items-center">
            <label className='resume-label col-md-3'>Resume/CV</label>
            <div className='col-md-9 my-4 my-md-3'>
              <input
                id='attach-file'
                type='file'
              />
              <button
                className='attach-button'
                onClick={selectFile}
              >
                <i className="fa-solid fa-paperclip"></i>
                ATTACH RESUME/CV
              </button>
            </div>
          </div>

          <Input
            label='Full name'
            name='fullName'
            register={register}
            isReq={true}
          />
          <p className='error'>{errors.fullName?.message}</p>
          <Input
            label='Email'
            name='email'
            register={register}
            isReq={true}
          />
          <p className='error'>{errors.email?.message}</p>
          <Input
            label='Phone'
            name='phone'
            register={register}
            isReq={false}
          />
          <p className='error'>{errors.phone?.message}</p>
          <Input
            label='Company'
            name='company'
            register={register}
            isReq={false}
          />
          <p className='error'>{errors.company?.message}</p>
        </div>

        <h4>LINKS</h4>
        <div className="row my-4">
          <Input
            label='Linkedin URL'
            name='linekdinURL'
            register={register}
            isReq={false}
          />
          <Input
            label='Twitter URL'
            name='twitterURL'
            register={register}
            isReq={false}
          />
          <Input
            label='GitHub URL'
            name='githubURL'
            register={register}
            isReq={false}
          />
          <Input
            label='Portfolio URL'
            name='portfolioURL'
            register={register}
            isReq={false}
          />
          <Input
            label='Other website'
            name='otherWebsite'
            register={register}
            isReq={false}
          />
        </div>

        {console.log(register)}

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
          <input
            type='submit'
            className='submit-button mx-auto text-center'
            value='SUBMIT APPLICATION'

          />
        </div>

      </form>
    </div>
  );
}

export default Form;