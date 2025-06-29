import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { LuMessageSquarePlus } from 'react-icons/lu'
import { auth } from '../firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { chatingInfo } from '../Slices/chatSlice'

const MessagesList = () => {
  const user = useSelector((state) => state.chating.value);
  const [friendssmslist, setfriendssmslist] = useState([]);
  const db = getDatabase();
  const dispatch = useDispatch();

  useEffect(() => {
    const friendsRef = ref(db, "friends/");
    onValue(friendsRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        if (
          auth.currentUser.uid == item.val().senderid ||
          auth.currentUser.uid == item.val().reciverid
        ) {
          array.push({ ...item.val(), id: item.key });
        }
      });
      setfriendssmslist(array);
    });
  }, []);

  const handleUserselect = (item) => {
    if (auth.currentUser.uid == item.senderid) {
      dispatch(chatingInfo({ name: item.recivername, id: item.reciverid, photo: item.reciverphoto }))
    } else {
      dispatch(chatingInfo({ name: item.sendername, id: item.senderid, photo: item.senderphoto }))
    }
  }

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
            {friendssmslist.map((item) => (
              <li onClick={() => handleUserselect(item)} className={`mx-5 flex justify-between p-2 mb-3 border-b-2 
              ${user?.id == item.senderid || user?.id == item.reciverid ? "bg-gray-900/60 rounded-t-xl" : "hover:bg-gray-700/40"} 
              border-gray-500/80 cursor-pointer hover:rounded-t-xl`}>
                <div className='flex gap-4 items-center'>
                  {auth.currentUser.uid == item.senderid ?
                    <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70'
                      src={item.reciverphoto} alt="" />
                    :
                    <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70'
                      src={item.senderphoto} alt="" />
                  }
                  <div className=''>
                    {auth.currentUser.uid == item.senderid ?
                      <h3 className='text-2xl font-medium'>{item.recivername}</h3>
                      :
                      <h3 className='text-2xl font-medium'>{item.sendername}</h3>
                    }
                    <h5 className='text-md'>Last Message</h5>
                  </div>
                </div>
                <p className='text-md text-white my-3'>Date or Time</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesList