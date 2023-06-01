import React from 'react';

interface IProps {
  name: string;
  label: string;
  type: string;
  handleChange: any;
  value: string;
}

const Input = ({ name, label, type, handleChange, value }: IProps) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} <br />
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          required
        />
      </label>
    </div>
  );
};

export default Input;
