import React from 'react'
import { FaRegEyeSlash, FaUserTie } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'

const Sign_up = () => {
  return (
    <div>
      <div className='w-130 bg-teal-100 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-30'>
        <h1 className='text-4xl font-bold text-center'>Sign up</h1>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-15'>
          <FaUserTie className='absolute right-2 text-xl top-4' />
          <input className='absolute w-full text-white/80 bg-transparent h-full text-md outline-none peer' type="email" id='email' required />
          <label className='text-md text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="email">User</label>
        </div>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-15'>
          <MdEmail className='absolute right-2 text-xl top-4' />
          <input className='absolute w-full text-white/80 bg-transparent h-full text-md outline-none peer' type="email" id='email' required />
          <label className='text-md text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="email">Email</label>
        </div>
        <div className='relative w-full h-12.5 border-b-2 border-[#000b13] mt-7.5 mb-2'>
          <FaRegEyeSlash className='absolute right-2 text-xl top-4' />
          <input className='absolute w-full text-white/80 bg-transparent h-full text-md outline-none peer' type="password" id='password' required />
          <label className='text-md text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-25px] peer-valid:translate-y-[-25px]' For="password">Create Password</label>
        </div>
        <div className='flex justify-between mt-5'>
          <label for=""><input className='mr-1' type="checkbox" />I agree to the terms & conditions</label>
        </div>
        <button type="submit" className='w-full h-15 my-8 bg-black rounded-md text-xl text-white font-semibold'>Sign up</button>
        <div>
          <p className='text-center'>Already have an account <Link to={"/login"} className='font-semibold hover:underline ml-2' href="">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Sign_up