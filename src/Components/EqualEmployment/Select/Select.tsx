import React from 'react';
import './Select.css';

type optionObject = {
  key: number;
  value: string;
  option: string; 
}

type Props = {
  label: string;
  options: optionObject[];
}

const Select = (props: Props) => {
  return (
    <div className="row d-flex align-items-center">
      <label className='col-md-3'>{props.label}</label>
      <div className='col-md-9 my-4 my-md-3'>
        <select>
          {
            props.options.map((each) => {
              return(
                <option key={each.key}>{each.option}</option>
              )
            })
          }
        </select>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Select;