import React from 'react';
import Select from '../Select/Select';
import './EqualEmployment.css';

const EqualEmployment = () => {
  const toggleRaceInfo = () => {
    const raceInfo = document.querySelector<HTMLElement>('.race-info');
    if (raceInfo) {
      if (raceInfo.style.display === 'none') raceInfo.style.display = 'block';
      else raceInfo.style.display = 'none';
    }
  }

  return (
    <div>
      <h4 className='mb-5'>
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
        info={
          <i
            className="fa fa-info-circle"
            aria-hidden="true"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Click to see details about each option."
            onClick={toggleRaceInfo}
          >
          </i>
        }
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
            key: 9,
            value: 'decline',
            option: 'Decline to self-identity'
          }
        ]}
      />
      <div className='row d-flex justify-content-end'>
        <div className='race-info col-md-9'>
          <h6>Hispanic or Latino</h6>
          <p>
            A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race.
          </p>
          <h6>White (Not Hispanic or Latino)</h6>
          <p>
            A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.
          </p>
          <h6>Black or African American (Not Hispanic or Latino)</h6>
          <p>
            A person having origins in any of the black racial groups of Africa.
          </p>
          <h6>Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)</h6>
          <p>
            A person having origins in any of the peoples of Hawaii, Guam, Samoa, or other Pacific Islands.
          </p>
          <h6>Asian (Not Hispanic or Latino)</h6>
          <p>
            A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.
          </p>
          <h6>American Indian or Alaska Native (Not Hispanic or Latino)</h6>
          <p>
            A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.
          </p>
          <h6>Two or More Races (Not Hispanic or Latino)</h6>
          <p>
            All persons who identify with more than one of the above five races.
          </p>
        </div>
      </div>
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

    </div>
  );
}

export default EqualEmployment;