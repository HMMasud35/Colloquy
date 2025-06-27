import React from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { IoSendSharp } from 'react-icons/io5'
import { MdVideocam } from 'react-icons/md'
import { RiEmojiStickerLine } from 'react-icons/ri'
import MessagesList from '../Component/MessageList'

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <MessagesList/>
        <div className='h-screen relative'>
          <div className='bg-sky-800/80 fixed w-6xl z-10 h-25 flex justify-between items-center p-8'>
            <div className='flex gap-5'>
              <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70' src="" alt="" />
              <div>
                <h5 className='text-2xl text-white font-semibold'>MERN2405</h5>
                <p className='text-xl text-gray-400'>last seen today at 2:46 am </p>
              </div>
            </div>
            <div>
              <ul className='flex gap-15'>
                <li><a href=""><MdVideocam className='text-4xl text-gray-200' /></a></li>
                <li><a href=""><IoIosSearch className='text-4xl text-gray-200' /></a></li>
                <li><a href=""> <CiMenuKebab className='text-4xl text-gray-300' /></a></li>
              </ul>
            </div>
          </div>
          <div className='bg-[url(./assets/image/bg-img-3.jpg)] w-full h-screen fixed bg-no-repeat bg-cover bg-center bg-fixed text-white'></div>
          <div className='flex  justify-between items-center absolute bottom-0 left-0 bg-sky-900/80 w-6xl h-25 py-5 px-10'>
            <button className='cursor-pointer'><FiPlus className='text-5xl text-gray-400 mr-6' /></button>
            <button className='absolute cursor-pointer ml-23'><RiEmojiStickerLine className='left-32 text-4xl text-gray-400' /></button>
            <input className='w-full h-17 bg-sky-800 px-17 rounded-2xl outline-0 text-gray-100 text-xl mr-6' type="text" placeholder='Type a message' />
            <button className='absolute cursor-pointer right-30'><IoSendSharp className=' text-4xl text-gray-400' /></button>
            <button className='cursor-pointer'><AiFillAudio className='text-5xl text-gray-400' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home