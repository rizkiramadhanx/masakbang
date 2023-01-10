import React, { useEffect, useState } from 'react';

const Ssr = ({ todos }: any) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const anu = await res.json();
      setData(anu);
    };

    fetchApi();
  }, []);

  return (
    <div className="bg-red-100">
      <ul>
        <li>Data kosong</li>
        <li>{JSON.stringify(todos)}</li>
        <li>{JSON.stringify(data)}</li>
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

export default Ssr;
