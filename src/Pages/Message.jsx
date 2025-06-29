import React, { useEffect, useState } from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { IoSendSharp } from 'react-icons/io5'
import { MdVideocam } from 'react-icons/md'
import { RiEmojiStickerLine } from 'react-icons/ri'
import MessagesList from '../Component/MessageList'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { auth } from '../firebase.config'

const Message = () => {
  let [sms, setSms] = useState(null)
  const user = useSelector((state) => state.chating.value)
  const [smslist, setsmslist] = useState([]);
  const db = getDatabase();


  useEffect(() => {
    const friendsRef = ref(db, "messagelist/");
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
      setsmslist(array);
    });
  }, []);

  let handleSms = (e) => {
    setSms(e.target.value);
  }

  const handleSendsms = () => {
    const db = getDatabase();
    set(push(ref(db, 'messagelist/')), {
      sendername: auth.currentUser.displayName,
      senderid: auth.currentUser.uid,
      senderphoto: auth.currentUser.photoURL,
      recivername: user.name,
      reciverid: user.id,
      reciverphoto: user.photo,
      sms: sms,
      // date : 
    }).then(() => {
      setSms("")
      // remove(ref(db, "friendrequest/", item.id))
    })
  }

  console.log(smslist);

  return (
    <div>
      <div className='flex'>
        <MessagesList />
        {user?.id ? (
          <div className='h-screen relative'>
            <div className='bg-sky-800/95 fixed w-6xl z-10 h-25 flex justify-between items-center p-8'>
              <div className='flex gap-5'>
                <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70' src={user?.photo} alt="User Photo" />
                <div>
                  <h5 className='text-2xl text-white font-semibold'>{user?.name}</h5>
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
            <div className=' w-screen h-screen bg-[url(./assets/image/bg-img-3.jpg)] fixed bg-no-repeat bg-cover bg-center bg-fixed text-white py-25 overflow-y-scroll'>
              {smslist.map((smsitem) => (
                <div className='bg-gray-400'>
                  <li className="mx-5 flex justify-between p-2 mb-3 border-b-2 border-gray-500/80 cursor-pointer hover:rounded-t-xl">
                    <div className='flex gap-4 items-center'>
                      {auth.currentUser.uid == smsitem.senderid ||
                        auth.currentUser.uid == smsitem.reciverid &&
                        <img className='w-10 h-10 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70'
                          src={smsitem.senderphoto} alt="" />
                      }
                      <div className='w-full'>
                        <p className={`text-md px-3 py-2 ${user?.id == smsitem.senderid ? "bg-orange-800 rounded-tr-2xl" : "bg-green-500 rounded-tl-2xl"} `}>{smsitem.sms}</p>
                      </div>
                    </div>
                    <p className='text-md text-white my-3'>Date or Time</p>
                  </li>
                </div>
              ))}
              <div className='bg-orange-500'></div>
            </div>
            <div className='flex  justify-between items-center absolute bottom-0 left-0 bg-sky-900/95 w-6xl h-25 py-5 px-10'>
              <button className='cursor-pointer'><FiPlus className='text-5xl text-gray-400 mr-6' /></button>
              <button className='absolute cursor-pointer ml-23'><RiEmojiStickerLine className='left-32 text-4xl text-gray-400' /></button>
              <input onChange={handleSms} className='w-full h-17 bg-sky-800 px-17 rounded-2xl outline-0 text-gray-100 text-xl mr-6'
                type="text"
                placeholder='Type a message'
                value={sms} />
              <button onClick={handleSendsms} className='absolute cursor-pointer right-32'><IoSendSharp className=' text-4xl text-gray-400' /></button>
              <button className='cursor-pointer'><AiFillAudio className='text-5xl text-gray-400' /></button>
            </div>
          </div>
        ) : (
          <h2 className='text-5xl text-white m-auto ml-80 font-bold'>Please Click Your Friend</h2>
        )}

      </div>
    </div>
  )
}

export default Message