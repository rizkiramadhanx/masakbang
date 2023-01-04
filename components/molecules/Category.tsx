import React from 'react';

type TpropsCategory = {
  name: string;
  data: {
    name: string;
    value: string;
  }[];
};
const Category = ({ name, data }: TpropsCategory) => {
  return (
    <div>
      <h1 className="text-lg">{name}</h1>
      <ul className="flex-col w-full">
        {data.map((e, i) => (
          <button
            className="relative mt-1 before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            key={i}
          >
            🥗 {e.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Category;
