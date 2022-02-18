import React from 'react'
import './Input.css';

type Props = {
  label: string;
}

const Input = (props: Props): JSX.Element => {
  return (
    <div className="row d-flex align-items-center">
      <label className='col-md-3'>{ props.label }</label>
      <div className='col-md-9 my-4 my-md-3'>
        <input />
      </div>
    </div>
  );
}

export default Input;