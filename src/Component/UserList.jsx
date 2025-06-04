import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from '../firebase.config';


const UserList = () => {
  const [userList, setuserList] = useState([])
  const db = getDatabase();

  useEffect(() => {
    const userListRef = ref(db, 'users/');
    onValue(userListRef, (snapshot) => {
      const array = []
      snapshot.forEach((item) => {
        if (item.key != auth.currentUser.uid) {
          array.push(item.val())
        }
      })
      setuserList(array)
    });
  }, [])

  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>People you may know</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          {userList.map((item) => (
            <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70' src={item.photo} alt="user photo" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>{item.name}</h3>
                  <h5 className='text-md'>{item.email}</h5>
                </div>
              </div>
              <button className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserList