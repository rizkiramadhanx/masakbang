import React from 'react';

type InputProps = {
  labelText: string;
  name: string;
  required?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const Input = ({ labelText, required = true, name, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label>
        {labelText} <span className="text-red-500">{required && '*'}</span>
      </label>
      <input
        name={name}
        required={required}
        {...props}
        className="focus:outline-orange-600 border-[1px] border-black rounded-md px-2 py-1 mt-1"
      />
    </div>
  );
};

export default Input;
