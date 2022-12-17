/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BsSearch } from 'react-icons/bs';

type TSearchBox = {
  className?: string;
  onChange: (e: any) => void;
  placeholder: string;
};

const SearchBox = ({ className, onChange, placeholder }: TSearchBox) => {
  return (
    <div className="flex items-center gap-2 bg-white px-2 rounded-lg py-1">
      <input
        className={className || 'text-black focus:outline-none'}
        onChange={onChange}
        placeholder={placeholder}
      />
      <BsSearch color="black" />
    </div>
  );
};

export default SearchBox;
