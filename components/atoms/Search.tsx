import React from 'react';
import Select from 'react-select';

type TPropsSearch = {
  options: {
    value: string | number;
    label: string;
  }[];
  className: string;
  placeholder: string;
  onChange: any;
};

const Search = ({
  options,
  className,
  placeholder,
  onChange,
}: TPropsSearch) => {
  return (
    <Select
      className={className}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Search;
