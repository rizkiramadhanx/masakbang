import { Input } from '@/components/atoms';
import SwitchSelector from 'react-switch-selector';
import React, { useState, useEffect } from 'react';

type Tlogin = {
  email: string;
  password: string;
};

const Login = () => {
  const [local, setLocal] = useState<string | null>();
  const [formData, setFormData] = useState<Tlogin>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="flex justify-center min-h-screen">
        <form
          className={`w-3/4 sm:w-[500px] my-10 p-5 rounded-md border-2 flex flex-col gap-y-2`}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-orange-500 text-2xl font-extrabold">
            Form Login
          </h1>
          <Input name="email" labelText="Email" onChange={handleChange} />
          <Input name="password" labelText="Password" onChange={handleChange} />
          <button
            className="bg-orange-500 py-1 rounded-md text-white"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
