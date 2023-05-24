import React from 'react'
import cypher_red from '../../assets/cypher-red.png'
import discord from '../../assets/discord.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import Auth from './Auth'
function Login(props) {
  return (
    <Auth banner={cypher_red}>
      <h1 className="text-6xl font-koverwatch">Login</h1>
      <div className="mt-8 text-darkgray-100 mb-8 font-oskari">
        Don't have an account? <span onClick={props.toggle_signup} className="text-primary-500 cursor-pointer">Create one</span>
      </div>
      <input type="text" name="email" placeholder='Email Address' className='w-full focus:bg-darkgray-350 font-oskari py-4 px-8 bg-darkgray-400 outline-none rounded-md' />
      <input type="password" name="password" placeholder='Password' className='w-full focus:bg-darkgray-350 font-oskari mt-4 py-4 px-8 bg-darkgray-400 outline-none rounded-md' />
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
      <button className='
                    w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-oskari mt-8 rounded-lg font-bold
                  '>Log In</button>
      <div className='text-center mt-4 font-oskari'>
        <a href="#" className='text-darkgray-100 hover:text-white'>
          Forgot Password?
        </a>
      </div>
    </Auth>
  )
}


export default Login
