import React, { useState } from 'react';
import axios from 'axios';
import blitzcrank_red from '../../assets/blitzcrank-red.png';
import discord from '../../assets/discord.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import Auth from './Auth';

function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send signup request to the backend
      const response = await axios.post('http://localhost:3000/api/users/register', {
        email,
        password,
        confirmPassword,
      });

      // Handle the response from the server
      console.log(response.data);

      // Handle successful signup and redirect if needed
      if (response.data.success) {
        // Redirect to a different route
        // For example, you can redirect to the login page
        props.toggle_login();
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <Auth banner={blitzcrank_red}>
      <h1 className="text-6xl font-koverwatch">Create New Account</h1>
      <div className="mt-8 text-darkgray-100 mb-8 font-oskari">
        Already have an account?{' '}
        <span onClick={props.toggle_login} className="text-primary-500 cursor-pointer">
          Login
        </span>
      </div>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="w-full focus:bg-darkgray-350 font-oskari py-4 px-8 bg-darkgray-400 outline-none rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full focus:bg-darkgray-350 font-oskari mt-4 py-4 px-8 bg-darkgray-400 outline-none rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="w-full focus:bg-darkgray-350 font-oskari mt-4 py-4 px-8 bg-darkgray-400 outline-none rounded-md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="w-full flex mt-8 items-center text-darkgray-300">
          <div className="flex-1 w-full border-t mr-4  border-solid border-darkgray-300"></div>
          OR
          <div className="flex-1 w-full border-t ml-4 border-solid border-darkgray-300"></div>
        </div>
        <div className="grid grid-cols-3 w-full mt-4 gap-4">
          <div className="w-full h-16 bg-darkgray-400 rounded-lg hover:bg-darkgray-350 cursor-pointer flex items-center justify-center">
            <img src={discord} alt="" />
          </div>
          <div className="w-full h-16 bg-darkgray-400 rounded-lg hover:bg-darkgray-350 cursor-pointer flex items-center justify-center">
            <img src={facebook} alt="" />
          </div>
          <div className="w-full h-16 bg-darkgray-400 rounded-lg hover:bg-darkgray-350 cursor-pointer flex items-center justify-center">
            <img src={google} alt="" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-oskari mt-8 rounded-lg font-bold"
        >
          Sign Up
        </button>
      </form>
    </Auth>
  );
}

export default Signup;
