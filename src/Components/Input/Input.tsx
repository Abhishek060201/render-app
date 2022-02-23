import React from 'react'
import './Input.css';

type Props = {
  label: string;
  isRequired?: boolean;
}

const Input = (props: Props): JSX.Element => {
  return (
    <div className="row d-flex align-items-center">
      <label className='input-label col-md-3'>
        {props.label}
      </label>
      {/* {
        props.isRequired ? <span className='col-md-0'> *</span> : null
      } */}
      <div className='col-md-9 my-4 my-md-3'>
        <input />
      </div>
    </div>
  );
}

export default Input;