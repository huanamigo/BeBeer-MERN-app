import React from 'react';

interface IProps {
  name: string;
  label: string;
  type: string;
  handleChange: any;
}

const Input = ({ name, label, type, handleChange }: IProps) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} <br />
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default Input;
