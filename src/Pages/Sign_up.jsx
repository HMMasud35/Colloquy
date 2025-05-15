import React, { useState } from 'react'
import { FaRegEyeSlash, FaUserTie } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'
import Colloquy from '../Component/Colloquy'

const Sign_up = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleUser = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value }
    })
  }

  let handleEmail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value }
    })
  }

  let handlePassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value }
    })
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password ) {
      alert("all file add dd")
    }
  }

  return (
    <div className='flex'>
      <div className='w-130 bg-sky-800/50 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-50 ml-80'>
        <h1 className='text-4xl font-bold text-center'>Sign up</h1>
        <form onSubmit={handleSignup}>
          <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-10'>
            <FaUserTie className='absolute right-2 text-2xl top-4' />
            <input onChange={handleUser}  className='absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer' type="text" id='text' name='text' />
            <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]' htmlFor='text'>User</label>
          </div>
          <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-8'>
            <MdEmail className='absolute right-2 text-2xl top-4' />
            <input onChange={handleEmail} className='absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer' type="email" id='email'  />
            <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]' htmlFor="email">Email</label>
          </div>
          <div className='relative w-full h-12.5 border-b-2 border-[#000b13] mt-8.5 mb-2'>
            <FaRegEyeSlash className='absolute right-2 text-2xl top-4' />
            <input onChange={handlePassword} className='absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer' type="password" id='password'  />
            <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]' htmlFor="password">Create Password</label>
          </div>
          <div className='flex justify-between mt-5'>
            <label className='text-xl' htmlFor=""><input className='mr-1' type="checkbox" />I agree to the terms & conditions</label>
          </div>
          <button type="submit" className='w-full py-5 my-8 bg-black rounded-md text-3xl text-white font-semibold'>Sign up</button>
          <div>
            <p className='text-center text-xl'>Already have an account <Link to={"/login"} className='font-semibold hover:underline ml-2' href="">Login</Link></p>
          </div>
        </form>
      </div>
      <Colloquy />
    </div>
  )
}

export default Sign_up