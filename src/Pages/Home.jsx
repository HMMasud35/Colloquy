import React from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { GrChannel, GrChat } from 'react-icons/gr'
import { HiStatusOnline } from 'react-icons/hi'
import { IoIosSearch } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuMessageSquarePlus } from 'react-icons/lu'
import { MdVideocam } from 'react-icons/md'
import { RiEmojiStickerLine, RiUserCommunityFill } from 'react-icons/ri'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <div className='block bg-subcolor w-1/20 h-screen px-7 place-items-center'>
          <ul className='mt-5'>
            <li className='mb-15'><a href=""><GrChat className='text-4xl text-gray-300' /></a></li>
            <li className='mb-15'><a href=""><HiStatusOnline className='text-4xl text-gray-300' /></a></li>
            <li className='mb-15'><a href=""><GrChannel className='text-4xl text-gray-300' /></a></li>
            <li className='mb-15'><a href=""><RiUserCommunityFill className='text-4xl text-gray-300' /></a></li>
          </ul>
          <ul className='mt-110'>
            <li><Link to={"/"} href=""><IoSettingsOutline className='text-4xl text-gray-300 ml-2 mb-8' /></Link></li>
            <li><a href=""><img className='w-10 h-10 bg-amber-200 rounded-4xl ' src="" alt="" /></a></li>
          </ul>
        </div>
        <div className=' bg-secendary w-6/20 h-screen'>
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
            <input className='bg-subcolor w-full h-13 rounded-xl outline-0 mt-5 text-2xl px-20 text-gray-100' type="search" placeholder='Search' />
            <IoIosSearch className='absolute top-28 left-35 text-3xl text-gray-200' />
            <ul className='flex gap-3 mt-5'>
              <li className='py-2 px-5 bg-subcolor rounded-3xl text-gray-400 text-xl hover:bg-ulhover hover:text-ultext'><a href="">All</a></li>
              <li className='py-2 px-5 bg-subcolor rounded-3xl text-gray-400 text-xl hover:bg-ulhover hover:text-ultext'><a href="">Unread</a></li>
              <li className='py-2 px-5 bg-subcolor rounded-3xl text-gray-400 text-xl hover:bg-ulhover hover:text-ultext'><a href="">Favourites</a></li>
              <li className='py-2 px-5 bg-subcolor rounded-3xl text-gray-400 text-xl hover:bg-ulhover hover:text-ultext'><a href="">Groups</a></li>
            </ul>
          </div>
          <div className='bg-secendary mt-2 h-screen text-white'>Frand</div>
        </div>

        <div className='w-13/20 h-screen relative'>
          <div className='bg-subcolor w-full h-25 flex justify-between items-center p-8'>
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
          <div className='flex  justify-between items-center absolute bottom-0 left-0 bg-subcolor w-full h-25 py-5 px-10'>
            <button className='cursor-pointer'><FiPlus className='text-5xl text-gray-400 mr-6' /></button>
            <button className='absolute cursor-pointer ml-23'><RiEmojiStickerLine className='left-32 text-4xl text-gray-400' /></button>
            <input className='w-full h-17 bg-1 px-20 rounded-2xl outline-0 text-gray-100 text-xl mr-6' type="text" placeholder='Type a message' />
            <button className='cursor-pointer'><AiFillAudio className='text-5xl text-gray-400' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home