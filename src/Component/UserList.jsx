import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { auth } from '../firebase.config';


const UserList = () => {
  const [userList, setuserList] = useState([])
  const [checkRequestId, setcheckRequestId] = useState([])
  const [checkSenderId, setCheckSenderId] = useState([])
  const [checkFriendsId, setcheckFriendsId] = useState([])
  const [checkCancleId, setcheckCancleId] = useState([])
  const db = getDatabase();

  //users messages
  useEffect(() => {
    const userListRef = ref(db, 'users/');
    onValue(userListRef, (snapshot) => {
      const array = []
      snapshot.forEach((item) => {
        if (item.key != auth.currentUser.uid) {
          array.push({ ...item.val(), id: item.key })
        }
      })
      setuserList(array)
    });
  }, [])

  // //request messages
  useEffect(() => {
    const requestRef = ref(db, "friendrequest/");
    onValue(requestRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().reciverid);
      });
      setcheckRequestId(array)
    });
  }, []);

  //friend messages
  useEffect(() => {
    const requestRef = ref(db, "friends/");
    onValue(requestRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().reciverid);
      });
      setcheckFriendsId(array)
    });
  }, []);

  // //cancle request messages
  useEffect(() => {
    const cancleRef = ref(db, "friendrequest/");
    onValue(cancleRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        if (auth.currentUser.uid) {
          array.push({ ...item.val(), id: item.key });
        }
      });
      setcheckCancleId(array)
    });
  }, []);

  const handleFriendrequest = (item) => {
    const db = getDatabase();
    set(push(ref(db, 'friendrequest/')), {
      sendername: auth.currentUser.displayName,
      senderid: auth.currentUser.uid,
      senderphoto: auth.currentUser.photoURL,
      recivername: item.name,
      reciverid: item.id,
      reciverphoto: item.photo,
    })
  }

  const handleCancleSendRequest = (item) => {
    const db = getDatabase()
    remove(ref(db, "friendrequest/", item.id))
  }

  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>People you may know</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          {userList.map((item) => (
            < li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35' >
              <div className='flex gap-4 items-center'>
                <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70' src={item.photo} alt="user photo" />
                <div className=''>
                  <h3 className='text-2xl font-medium'>{item.name}</h3>
                  <h5 className='text-md w-10'>{Date}</h5>
                </div>
              </div>

              {checkFriendsId.includes(
                auth.currentUser.uid + item.id
              ) ||
                checkFriendsId.includes(
                  item.id + auth.currentUser.uid
                ) ? (
                <button className='py-2 px-4 bg-green-900 rounded-xl text-xl text-white'>Friend</button>
              ) :

                checkRequestId.includes(
                  auth.currentUser.uid + item.id
                ) ||
                  checkRequestId.includes(
                    item.id + auth.currentUser.uid
                  ) ||
                  checkCancleId.includes(
                    auth.currentUser.uid + item.id
                  ) ? (
                  checkRequestId.includes(
                    auth.currentUser.uid + item.id
                  ) ? (
                    <button onClick={() => handleCancleSendRequest(item)} className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Cancel</button>
                  ) : (
                    <button className='py-2 px-4 bg-gray-800/30 rounded-xl text-xl text-white/50'>Panding</button>
                  )
                ) : (
                  <button onClick={() => handleFriendrequest(item)} className='py-2 px-4 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 '>Add Friend</button>
                )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserList