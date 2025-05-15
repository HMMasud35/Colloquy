import React, { useState } from 'react'
import { FaRegEyeSlash, FaUserTie } from 'react-icons/fa'
import { Link } from 'react-router'
import Colloquy from '../Component/Colloquy'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  })

  const handleUser = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value }
    })
  }

  let handlePassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value }
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.password) {
      toast.error("All fields are required")
    } else {
      toast.success("Welcome to Colloquy")
    }
  }

  return (
    <div className='flex'>
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={10}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '18px'
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className='w-130 bg-sky-800/50 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-50 ml-80 z-10'>
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-10'>
            <FaUserTie className='absolute right-2 text-2xl top-4' />
            <input onChange={handleUser} className='absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer' type="text" id='text' name='text' />
            <label className='text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]' htmlFor='text'>User</label>
          </div>
          <div className='relative w-full h-12.5 border-b-2 border-[#000b13] my-8 mb-2'>
            <FaRegEyeSlash className='absolute right-2 text-2xl top-4' />
            <input onChange={handlePassword} className='absolute w-full text-white bg-transparent h-full text-xl outline-none peer' type="password" id='password' />
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
        </form>
      </div>
      <Colloquy />
    </div>
  )
}

export default Login