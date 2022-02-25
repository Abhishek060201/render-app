import React from 'react';
import EqualEmployment from '../EqualEmployment/EqualEmployment';
import Input from '../Input/Input';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css';

const phoneRegExp = /^(\+[\d]{1,4})[1-9]\d{3,13}$/;
const linkedinURLRegExp = /^(https?:\/\/(www.)?linkedin.com\/(mwlite\/ | m\/)?in\/[a-zA-Z0-9_.-]+\/?)/;
const twitterURLRegExp = /^(https?:\/\/(www.)?twitter.com\/[a-zA-Z0-9_.-]+\/?)/;
const githubURLRegExp = /^(https?:\/\/(www.)?github.com\/[a-zA-Z0-9_.-]+\/?)/;


const schema = yup.object().shape({
  // resume: yup.mixed()
  //   .required('Please attach your Resume')
  //   .test('fileSize', 'The file is too large', (vaue) => {
  //     return value && value[0].size <= 2000000
  //   }),
  fullName: yup.string()
    .required('Please Fill in this Field')
    .min(10),
  email: yup.string()
    .required('Please Fill in this Field')
    .email(),
  phone: yup.string()
    .required('Please Fill in this Field')
    .matches(phoneRegExp, 'Phone number is not valid').transform(v => v === '' ? void 0 : v),
  linkedinURL: yup.string()
    .required('Please Fill in this Field')
    .matches(linkedinURLRegExp, 'Enter correct url!'),
  twitterURL: yup.string()
    .matches(twitterURLRegExp, 'Enter correct url!'),
  githubURL: yup.string()
    .matches(githubURLRegExp, 'Enter correct url!'),
})

const Form: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitHandler = (data: object) => {
    alert(JSON.stringify(data));
  }

  const selectFile = (e: React.MouseEvent) => {
    const fileInput = document.getElementById('attach-file');
    fileInput?.click();
    console.log(e.target);
  }

  return (
    <div className='form-container'>
      <form className='mx-auto' onSubmit={handleSubmit(submitHandler)}>
        {console.log(errors)}
        <h4>SUBMIT YOUR APPLICATION</h4>

        <div className="row my-4">

          <div className="row d-flex align-items-center">
            <label className='resume-label col-md-3'>Resume/CV</label>
            <div className='col-md-9 my-4 my-md-3'>
              <input
                id='attach-file'
                type='file'
                {...register('resume')}
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
            isReq={true}
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
            name='linkedinURL'
            register={register}
            isReq={true}
          />
          <p className='error'>{errors.linkedinURL?.message}</p>

          <Input
            label='Twitter URL'
            name='twitterURL'
            register={register}
            isReq={false}
          />
          <p className='error'>{errors.twitterURL?.message}</p>

          <Input
            label='GitHub URL'
            name='githubURL'
            register={register}
            isReq={false}
          />
          <p className='error'>{errors.githubURL?.message}</p>

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