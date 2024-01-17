// SignUp.js
import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="text"
              id="username"
              name="username"
              placeholder="Your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
