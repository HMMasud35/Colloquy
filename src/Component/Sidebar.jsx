import React from 'react'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { GrChannel, GrChat } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiUserCommunityFill } from 'react-icons/ri'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <div>
      <div className='bg-sky-800/80 h-screen shadow-md shadow-white'>
        <div className='border-b-5 border-gray-300 py-3'>
          <img className='m-auto w-30' src="/image/logo.png" alt="logo.png" />
          <h1 className='text-center text-4xl font-bold text-white'>Colloquy</h1>
        </div>
        <ul>
          <li className='p-5 pr-12 hover:bg-gray-800/30 w-full h-full'><a className='text-2xl text-white flex ' href=""><FaHome className='w-10 mr-5 text-4xl text-gray-300' />Deshboard</a></li>
          <li className='p-5 pr-12 hover:bg-gray-800/30 w-full h-full'><a className='text-2xl text-white flex' href=""><GrChat className='w-10 mr-5 text-4xl text-gray-300' />Chats</a></li>
          <li className='p-5 pr-12 hover:bg-gray-800/30 w-full h-full'><a className='text-2xl text-white flex' href=""><FaUserFriends className='w-10 mr-5 text-4xl text-gray-300' />Friends</a></li>
          <li className='p-5 pr-12 hover:bg-gray-800/30 w-full h-full'><a className='text-2xl text-white flex' href=""><GrChannel className='w-10 mr-5 text-4xl text-gray-300' />Chanel</a></li>
          <li className='p-5 pr-12 hover:bg-gray-800/30 w-full h-full'><a className='text-2xl text-white flex' href=""><RiUserCommunityFill className='w-10 mr-5 text-4xl text-gray-300' />Status</a></li>
        </ul>
        <ul className='mt-40'>
          <li className='py-5 px-5 pr-12 hover:bg-gray-800/30 w-full h-full'><Link to={"/login"} className='text-2xl text-white flex ' href=""><IoSettingsOutline className='w-10 mr-5 text-4xl text-gray-300' />Setting</Link></li>
        </ul>
      </div>
      <div className='bg-sky-700 mt-[-110px] p-3 hover:bg-gray-800/30 border-2 border-sky-800 rounded-4xl '>
        <li className='flex items-center text-xl font-semibold text-white '><img className='w-20 h-20 bg-amber-200 rounded-full mr-3 ' src="" alt="" />Hasan Masud</li>
      </div>
    </div>
  )
}

export default Sidebar