import React from 'react';
import Select from '../Select/Select';
import './EqualEmployment.css';

const EqualEmployment = () => {
  return (
    <div>
      <h4>
        U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION &nbsp;&nbsp;
        <span className='fw-normal' style={{ letterSpacing: 'normal' }}>(Completion is voluntary and will not subject you to adverse treatment)</span>
      </h4>

      <p>
        Our company values diversity. To ensure that we comply with reporting requirements and to learn more about how we can increase diversity in our candidate pool, we invite you to voluntarily provide demographic information in a confidential survey at the end of this application. Providing this information is optional. It will not be accessible or used in the hiring process, and has no effect on your opportunity for employment.
      </p>

      <Select
        label='Gender'
        options={[
          {
            key: 1,
            value: '',
            option: 'Select ...'
          },
          {
            key: 2,
            value: 'male',
            option: 'Male'
          },
          {
            key: 3,
            value: 'female',
            option: 'Female'
          },
          {
            key: 4,
            value: 'decline',
            option: 'Decline to self-identity'
          }
        ]}
      />
      <Select
        label='Race'
        options={[
          {
            key: 1,
            value: '',
            option: 'Select ...'
          },
          {
            key: 2,
            value: 'hispanic',
            option: 'Hispanic or Latino'
          },
          {
            key: 3,
            value: 'white',
            option: 'White (Not Hispanic or Latino)'
          },
          {
            key: 4,
            value: 'black',
            option: 'Black or African American (Not Hispanic or Latino)'
          },
          {
            key: 5,
            value: 'native',
            option: 'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)'
          },
          {
            key: 6,
            value: 'asian',
            option: 'Asian (Not Hispanic or Latino)'
          },
          {
            key: 7,
            value: 'american-indian',
            option: 'American Indian or Alaska Native (Not Hispanic or Latino)'
          },
          {
            key: 8,
            value: 'two-or-more',
            option: 'Two or More Races (Not Hispanic or Latino)'
          },
          {
            key: 8,
            value: 'decline',
            option: 'Decline to self-identity'
          }
        ]}
      />
      <Select
        label='Veteran status'
        options={[
          {
            key: 1,
            value: '',
            option: 'Select ...'
          },
          {
            key: 2,
            value: 'veteran',
            option: 'I am a veteran'
          },
          {
            key: 3,
            value: 'non-veteran',
            option: 'I am not a veteran'
          },
          {
            key: 4,
            value: 'none',
            option: 'Decline to self-identity'
          }
        ]}
      />

      <div className='d-flex'>
        <button className='submit-button mx-auto'>SUBMIT APPLICATION</button>
      </div>
    </div>
  );
}

export default EqualEmployment;