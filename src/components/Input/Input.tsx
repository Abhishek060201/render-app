import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './Input.css';

type Props = {
  label: string;
  name: string;
  isReq: boolean; 
  register: UseFormRegister<FieldValues>;
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
        <input 
          type='text'
          {...props.register(props.name)}
        />
      </div>
    </div>
  );
}

export default Input;