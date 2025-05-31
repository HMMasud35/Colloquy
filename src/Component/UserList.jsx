import React from 'react'
import { useSelector } from 'react-redux'


const UserList = () => {
  const data = useSelector((state) => state.userLogin.value)
 console.log(data);
 
  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>People you may know</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>{data.displayName}</h3>
                {/* <h5 className='text-md'>{data.email}</h5> */}
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>    
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>
          <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
            <div className='flex gap-4 items-center'>
              <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src="" alt="" />
              <div className=''>
                <h3 className='text-2xl font-medium'>Masud</h3>
                <h5 className='text-md'>I will call him today..</h5>
              </div>
            </div>
            <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserList