import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="relative bg-orange-500">
      <div className="container h-14 flex justify-end items-center gap-3 bg-orange-500 mt-10">
        <AiFillGithub size={20} /> <div>Source Code</div>
      </div>
    </div>
  );
};

export default Footer;
