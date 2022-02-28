import React, { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './Select.css';

type optionObject = {
  key: number;
  value: string;
  option: string;
}

type Props = {
  label: string;
  options: optionObject[];
  info?: JSX.Element | undefined;
  register: UseFormRegister<FieldValues>;
}

const Select = (props: Props) => {

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="row d-flex align-items-center">
      <label className='col-md-3 d-flex align-items-center  '>
        <span>{props.label}&nbsp;&nbsp;&nbsp;</span>
        {
          props.info ? props.info : null
        }
      </label>
      <div className='col-md-9 my-4 my-md-3'>
        <select {...props.register(props.label)}>
          {
            props.options.map((each) => {
              return (
                <option
                  key={each.key}
                  value={each.value}
                >
                  {each.option}
                </option>
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