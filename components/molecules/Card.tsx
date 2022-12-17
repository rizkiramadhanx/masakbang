import Image from 'next/image';
import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { MdFoodBank } from 'react-icons/md';
import { GiChefToque } from 'react-icons/gi';

type TPropsCard = {
  number: number;
};

const Card = ({}: TPropsCard) => {
  return (
    <div className="flex flex-col border-2">
      <div className="h-full w-full relative">
        <Image
          src="https://www.masakapahariini.com/wp-content/uploads/2018/04/Bango-Kecap-Manis-100x100.jpg"
          alt="its image"
          width={500}
          height={500}
        />
      </div>
      <div className="p-2">
        <ul className="md:flex flex-row justify-around">
          <li className="flex gap-1 items-center">
            <CiClock2 size={20} color="red" />
            <div>1 jam</div>
          </li>
          <li className="flex gap-1 items-center">
            <MdFoodBank size={20} color="red" />
            <div>4 Porsi</div>
          </li>
          <li className="flex gap-1 items-center">
            <GiChefToque size={20} color="red" />
            <div>Sulit</div>
          </li>
        </ul>
        <hr className="border-orange-500 my-2" />
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
      </div>
    </div>
  );
};

export default Card;
