import { CiMenuKebab } from 'react-icons/ci'
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";

const Friends = () => {
  const [friendsList, setfriendsList] = useState([]);
  const db = getDatabase();

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
      setfriendsList(array);
    });
  }, []);

  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>Friends</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          {friendsList.map((item) => (
            <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
              <div className='flex gap-4 items-center'>
                {auth.currentUser.uid == item.senderid ? (
                  <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src={item.reciverphoto} alt="Friends Photo" />
                ) : (
                  <img className='w-17 h-17 my-1 rounded-full bg-teal-700' src={item.senderphoto} alt="Friends Photo" />
                )}
                <div className=''>
                  {auth.currentUser.uid == item.senderid ? (
                    <h3 className='text-2xl font-medium'>
                      {item.recivername}</h3>
                  ) : (
                    <h3 className='text-2xl font-medium'>
                      {item.sendername}</h3>
                  )}
                  <h5 className='text-md'>Last seen Date & Time</h5>
                </div>
              </div>
              <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Friends
