import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'

const MyGroups = () => {
  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>My Groups</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          <li className='flex justify-between items-center p-1 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-20 h-20 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
          </li>
          <li className='flex justify-between items-center p-1 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-20 h-20 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
          </li>
          <li className='flex justify-between items-center p-1 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-20 h-20 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
          </li>
          <li className='flex justify-between items-center p-1 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-20 h-20 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
          </li>
          <li className='flex justify-between items-center p-1 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-20 h-20 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyGroups