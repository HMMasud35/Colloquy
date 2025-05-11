import React from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'
import Colloquy from '../Component/Colloquy'

const Login = () => {
  return (
    <div className='flex'>
      <div className='w-130 bg-sky-800/50 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-50 ml-80 z-10'>
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-10'>
          <MdEmail className='absolute right-2 text-2xl top-4' />
          <input className='absolute w-full text-white bg-transparent h-full text-xl outline-none peer' type="email" id='email' required />
          <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="email">Email</label>
        </div>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-8 mb-2'>
          <FaRegEyeSlash className='absolute right-2 text-2xl top-4' />
          <input className='absolute w-full text-white bg-transparent h-full text-xl outline-none peer' type="password" id='password' required />
          <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="password">Password</label>
        </div>
        <div className='flex justify-between mt-5'>
          <label className='text-xl' for=""><input className='mr-1' type="checkbox" />Remember me</label>
          <a className='hover:underline text-xl' href="">Forgot password</a>
        </div>
        <button type="submit" className='w-full py-5 my-8 bg-black rounded-md text-3xl text-white font-semibold'>Login</button>
        <div>
          <p className='text-center text-xl'>Don't have an account? <Link to={"/signup"} className='font-semibold hover:underline ml-2' href="">Sign up</Link></p>
        </div>
      </div>
      <Colloquy />
    </div>
  )
}

export default Login