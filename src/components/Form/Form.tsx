import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { UUID } from 'uuid-generator-ts';
import EqualEmployment from '../EqualEmployment/EqualEmployment';
import Input from '../Input/Input';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css';

const phoneRegExp = /^(\+[\d]{1,4})[1-9]\d{3,13}$/;
const linkedinURLRegExp = /^(|(http(s)?:\/\/)?(www.)?linkedin\.com\/(in)\/[\w0-9\-_,&=]+)$/;
const twitterURLRegExp = /^(|(http(s)?:\/\/)?(www.)?twitter\.com\/[\w0-9\-_,&=]+)$/;
const githubURLRegExp = /^(|(http(s)?:\/\/)?(www.)?github\.com\/[\w0-9\-_,&=]+)$/;



const schema = yup.object().shape({
  resume: yup.mixed()
    .test('required', 'Please upload a file', (value) => {
      return value && value.length;
    })
    .test('fileType', 'File should be a pdf', (value) => {
      return value && value[0] && ["application/pdf"].includes(value[0].type)
    })
    .test('fileSize', 'File should be less than 5MB', (value) => {
      return value && value[0] && value[0].size <= 5000000
    }),
  fullName: yup.string()
    .required('Please Fill in this Field')
    .min(10, 'Must be atleast 10 characters long'),
  email: yup.string()
    .required('Please Fill in this Field')
    .email('Please Enter a valid Email'),
  phone: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid').transform(v => v === '' ? void 0 : v),
  linkedinURL: yup.string()
    .matches(linkedinURLRegExp, 'Enter correct url!'),
  twitterURL: yup.string()
    .matches(twitterURLRegExp, 'Enter correct url!'),
  githubURL: yup.string()
    .matches(githubURLRegExp, 'Enter correct url!'),
  additionalInfo: yup.string()
    .test('isEmptyOrMin30Chars', 'Should be atleast 30 characters long', (value: string | undefined) => {
      if(!value || value.length >= 30) 
        return true
      return false
    })
})

const Form: React.FC = (): JSX.Element => {

  const [resumeLabel, setResumeLabel] = useState('ATTACH RESUME/CV');
  const [captcha, setCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });
 
  const uploadOnFirestore = (data: any) => {
    const storageRef = ref(storage, new UUID().getDashFreeUUID())
    const uploadTask = uploadBytesResumable(storageRef, data.resume[0])

    uploadTask.on('state_changed',
      (snapshot) => (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      (error) => {
        console.log('something went wrong', error)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          data.resume = downloadURL;
          addDoc(collection(db, 'candidates'), data)
            .catch((e) => {
              alert("error" + e)
              const deleteRef = ref(storage, downloadURL)
              deleteObject(deleteRef)
            })
        });
      }
    )
  }

  const submitHandler = async (data: object) => {
    if (captcha) {
      setCaptcha(false)
      setResumeLabel('ATTACH RESUME/CV')
      await uploadOnFirestore(data)
      alert("Thank you, Your response has been recorded.")
      if(isSubmitSuccessful)
        reset()
    } else {
      setCaptchaError("Please verify that you are not a robot")
    }
  }

  const selectFile = (e: React.MouseEvent) => {
    const fileInput = document.getElementById('attach-file')
    console.log(fileInput)
    fileInput?.click()
  }

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setResumeLabel(e.currentTarget.files[0].name)
    }
  }

  const toggleCaptcha = (value: any) => {
    if(value !== null) {
      setCaptchaError("")
      setCaptcha(true)
    } else {
      setCaptcha(false)
    }
  }

  return (
    <div className='form-container'>
      <form className='mx-auto' onSubmit={handleSubmit(submitHandler)}>

        <h4>SUBMIT YOUR APPLICATION</h4>

        <div className="row my-4">

          <div className="row d-flex align-items-center">
            <label className='resume-label col-md-3'>Resume/CV</label>
            <div className='col-md-9 my-4 my-md-3'>
              <input
                id='attach-file'
                type='file'
                {...register('resume')}
                onInput={onInputChange}
              />
              <button
                className='attach-button'
                onClick={selectFile}
              >
                <i className="fa-solid fa-paperclip"></i>
                {resumeLabel}
              </button>
            </div>
          </div>
          <p className='error'>{errors.resume?.message}</p>

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
        
        {console.log(errors)}

        <h4>LINKS</h4>
        <div className="row my-4">
          <Input
            label='Linkedin URL'
            name='linkedinURL'
            register={register}
            isReq={false}
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

        {/* {console.log(register)} */}

        <h4 className='my-5'>PREFERRED PRONOUNS</h4>
        <div className="row">
          <label className='mb-4'>If you'd like, please share your pronouns with us.</label>
          <div className='mb-5'>
            <input placeholder='Type your response' />
          </div>
        </div>

        <h4 className='my-5'>ADDITIONAL INFORMATION</h4>
        <textarea 
          placeholder='Add a cover letter or anything else you want to share.' 
          {...register('additionalInfo')}
        />
        <p className='error'>{errors.additionalInfo?.message}</p>

        <hr className='my-5'></hr>

        <EqualEmployment register={register} />

        <div className='recaptcha-wrapper'>
          <ReCAPTCHA
            className="my-4"
            sitekey="6LcMq5QeAAAAAMnnojI5eJvtIzoTz_rm5noVnuJm"
            onChange={toggleCaptcha}
          />
          <div className='error mb-4 text-center'>{captchaError}</div>
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
