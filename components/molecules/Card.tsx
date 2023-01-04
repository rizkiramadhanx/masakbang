import Image from 'next/image';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdFoodBank } from 'react-icons/md';
import { GiChefToque } from 'react-icons/gi';
import { dataRecipes } from '@/utils/types/RecipeTypes';
import Link from 'next/link';

type TPropsCard = {
  data: dataRecipes;
};

const Card = ({ data }: TPropsCard) => {
  return (
    <Link
      href={`/resep/${data.key}`}
      className="flex flex-col border-2 border-gray-500"
    >
      <div className="h-full w-full relative">
        <Image src={data.thumb} alt={data.key} width={500} height={500} />
      </div>
      <div className="p-2">
        <ul className="md:flex flex-row justify-around">
          <li className="flex gap-1 items-center">
            <AiOutlineClockCircle size={20} color="red" />
            <div>{data.times}</div>
          </li>
          <li className="flex gap-1 items-center">
            <MdFoodBank size={20} color="red" />
            <div>{data.serving}</div>
          </li>
          <li className="flex gap-1 items-center">
            <GiChefToque size={20} color="red" />
            <div>{data.difficulty}</div>
          </li>
        </ul>
        <hr className="border-orange-500 my-2" />
        <div>{data.title}</div>
      </div>
    </Link>
  );
};

export default Card;
