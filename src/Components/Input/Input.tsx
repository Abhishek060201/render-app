import React from 'react'
import './Input.css';

type Props = {
  label: string;
  name: string;
  isReq: boolean;
  ref?: any
}

const Input = (props: Props): JSX.Element => {
  return (
    <div className="row d-flex align-items-center">
      <label className='input-label col-md-3'>
        {props.label}
        {
          props.isReq ? <span style={{ color: 'red' }}> *</span> : null 
        }
      </label>
      <div className='col-md-9 my-4 my-md-3'>
        <input type='text' name={props.name} />
      </div>
    </div>
  );
}

export default Input;