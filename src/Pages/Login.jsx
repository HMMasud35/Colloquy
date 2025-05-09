import React from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='flex'>
      <div className='w-130 bg-teal-100 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-30'>
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-15'>
          <MdEmail className='absolute right-2 text-xl top-4' />
          <input className='absolute w-full text-white/80 bg-transparent h-full text-md outline-none peer' type="email" id='email' required />
          <label className='text-md text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="email">Email</label>
        </div>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] mb-2'>
          <FaRegEyeSlash className='absolute right-2 text-xl top-4' />
          <input className='absolute w-full text-white/80 bg-transparent h-full text-md outline-none peer' type="password" id='password' required />
          <label className='text-md text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="password">Password</label>
        </div>
        <div className='flex justify-between mt-5'>
          <label for=""><input className='mr-1' type="checkbox" />Remember me</label>
          <a className='hover:underline' href="">Forgot password</a>
        </div>
        <button type="submit" className='w-full h-15 my-8 bg-black rounded-md text-2xl text-white font-semibold'>Login</button>
        <div>
          <p className='text-center'>Don't have an account? <Link to={"/signup"} className='font-semibold hover:underline ml-2' href="">Sign up</Link></p>
        </div>
      </div>
      <div className='p-30 w-4xl'>
        <h2 className='text-3xl font-bold text-white mt-30 relative'>Welcome to. . . . . <span className='absolute top-[-50px] left-0 text-6xl font-bold text-white mt-25'>COLLOQUE</span></h2>
        <p className='text-2xl font-semibold text-white mt-25 leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius?</p>
      </div>
    </div>
  )
}

export default Login