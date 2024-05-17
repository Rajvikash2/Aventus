import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [VaultAdd, setAdd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [showpwd,setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (VaultAdd === '' || password === '' || confirmPassword === '') {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Password does not match');
    } else {
      setError('');
      // Perform login logic here
      console.log('Logging in with', { VaultAdd, password });
    }
  };

 
  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-2xl mb-6">Register</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Vault Address:
            </label>
            <input
              type="text"
              value={VaultAdd}
              onChange={(e) => setAdd(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type={showpwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              required
            />
            <span
              className="absolute inset-y-11 right-0 flex items-center px-2 cursor-pointer" 
              onClick={() => setShow(!showpwd)}           
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
             Conform Password:
            </label>
            <input
              type={showpwd ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirm(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              required
            />
            <span
              className="absolute inset-y-11 right-0 flex items-center px-2 cursor-pointer" 
              onClick={() => setShow(!showpwd)}           
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">*{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign Up
            </button>
          </div>
          <h1 className='text-center mt-4'>Or</h1>
          <div className='flex flex-row gap-3'>
            <h3>Already have an account?</h3>
            <Link to={'/login'}><button className=" text-blue-600 hover:text-blue-800 font-sm  rounded focus:outline-none focus:shadow-outline">
              Login</button></Link>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Signup;
