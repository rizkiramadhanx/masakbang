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
          <li className="mt-1 hover:underline" key={i}>
            🥗 {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
