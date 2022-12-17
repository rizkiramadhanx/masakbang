import { Search } from '@/components/atoms';
import { Card, Footer, Navbar } from '@/Molecules';
import React, { FC } from 'react';

const Home: FC = () => {
  const options = [
    {
      value: 1,
      label: 'Asu',
    },
    {
      value: 2,
      label: 'Asu 1',
    },
    {
      value: 3,
      label: 'Asu 1',
    },
  ];

  const onChange = (e: any) => {
    console.log(e.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="md:w-5/6 w-full">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5 bg-gray-100 w-full">
              {[1, 1, 1, 1, 1].map((e, i) => (
                <Card number={i} key={i} />
              ))}
            </div>
          </div>
          <div className="bg-red-100 w-1/6 p-2 hidden md:flex">
            <ul className="flex-col">
              <li className="border-2 p-1 border-black mt-1">Halo</li>
              <li className="border-2 p-1 border-black mt-1">Halo</li>
              <li className="border-2 p-1 border-black mt-1">Halo</li>
              <li className="border-2 p-1 border-black mt-1">Halo</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
