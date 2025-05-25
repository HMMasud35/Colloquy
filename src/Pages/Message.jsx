import React from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { LuMessageSquarePlus } from 'react-icons/lu'
import { MdVideocam } from 'react-icons/md'
import { RiEmojiStickerLine } from 'react-icons/ri'

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <div className=' bg-sky-950/95'>
          <div className='px-5 pt-8'>
            <div className='flex justify-between mb-2'>
              <h3 className='text-4xl font-semibold text-white'>Chats</h3>
              <div className='flex gap-2'>
                <a href="">
                  <LuMessageSquarePlus className='text-4xl text-gray-300' />
                </a>
                <a href="">
                  <CiMenuKebab className='text-4xl text-gray-300' />
                </a>
              </div>
            </div>
            <label htmlFor=""></label>
            <input className='bg-sky-800 w-full h-13 relative rounded-xl outline-0 mt-5 text-2xl px-20 text-gray-100' type="search" placeholder='Search' />
            <IoIosSearch className='absolute top-28 left-75 text-3xl text-gray-200' />
            <ul className='flex gap-3 mt-5 border-b-3 border-gray-700 pb-5'>
              <li className='py-2 px-5 bg-sky-800 rounded-3xl text-white text-xl hover:bg-black/50 hover:text-white'><a href="">All</a></li>
              <li className='py-2 px-5 bg-sky-800 rounded-3xl text-white text-xl hover:bg-black/50 hover:text-white'><a href="">Unread</a></li>
              <li className='py-2 px-5 bg-sky-800 rounded-3xl text-white text-xl hover:bg-black/50 hover:text-white'><a href="">Favourites</a></li>
              <li className='py-2 px-5 bg-sky-800 rounded-3xl text-white text-xl hover:bg-black/50 hover:text-white'><a href="">Groups</a></li>
            </ul>
          </div>
          <div className='mt-2 h-screen text-white'>
            <li className='mx-5 flex justify-between p-2 mb-3 border-b-2 border-gray-500/80  hover:bg-gray-900/40 hover:rounded-t-xl'>
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 rounded-full bg-teal-700' src="" alt="" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>Masud</h3>
                  <h5 className='text-md'>Last Message</h5>
                </div>
              </div>
              <p className='text-md text-white my-3'>Date or Time</p>
            </li>
            <li className='mx-5 flex justify-between p-2 mb-3 border-b-2 border-gray-500/80  hover:bg-gray-900/40 hover:rounded-t-xl'>
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 rounded-full bg-teal-700' src="" alt="" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>Masud</h3>
                  <h5 className='text-md'>Last Message</h5>
                </div>
              </div>
              <p className='text-md text-white my-3'>Date or Time</p>
            </li>
            <li className='mx-5 flex justify-between p-2 mb-3 border-b-2 border-gray-500/80  hover:bg-gray-900/40 hover:rounded-t-xl'>
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 rounded-full bg-teal-700' src="" alt="" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>Masud</h3>
                  <h5 className='text-md'>Last Message</h5>
                </div>
              </div>
              <p className='text-md text-white my-3'>Date or Time</p>
            </li>
            <li className='mx-5 flex justify-between p-2 mb-3 border-b-2 border-gray-500/80  hover:bg-gray-900/40 hover:rounded-t-xl'>
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 rounded-full bg-teal-700' src="" alt="" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>Masud</h3>
                  <h5 className='text-md'>Last Message</h5>
                </div>
              </div>
              <p className='text-md text-white my-3'>Date or Time</p>
            </li>
          </div>
        </div>

        <div className='h-screen relative'>
          <div className='bg-sky-800/80 fixed w-6xl z-10 h-25 flex justify-between items-center p-8'>
            <div className='flex gap-5'>
              <img className='w-15 h-15 bg-amber-200 rounded-4xl ' src="" alt="" />
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
          <div className='bg-[url(./assets/image/bg-img-3.jpg)] w-full h-screen fixed bg-no-repeat bg-cover bg-center bg-fixed text-white'>message</div>
          <div className='flex  justify-between items-center absolute bottom-0 left-0 bg-sky-900/80 w-6xl h-25 py-5 px-10'>
            <button className='cursor-pointer'><FiPlus className='text-5xl text-gray-400 mr-6' /></button>
            <button className='absolute cursor-pointer ml-23'><RiEmojiStickerLine className='left-32 text-4xl text-gray-400' /></button>
            <input className='w-full h-17 bg-sky-800 px-20 rounded-2xl outline-0 text-gray-100 text-xl mr-6' type="text" placeholder='Type a message' />
            <button className='cursor-pointer'><AiFillAudio className='text-5xl text-gray-400' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home