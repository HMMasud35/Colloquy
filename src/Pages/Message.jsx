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
import moment from 'moment/moment'
import { SlArrowDown } from 'react-icons/sl'

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
      date: `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}:
        ${new Date().getHours()}:${new Date().getMinutes()}`,
    }).then(() => {
      setSms("")
    })
  }

  return (
    <div>
      <div className='flex'>
        <MessagesList />
        {user?.id ? (
          <div className='h-screen w-screen bg-[url(./assets/image/bg-img-3.jpg)] bg-no-repeat bg-cover bg-center relative'>
            <div className='bg-sky-800/95 w-325 h-25 flex justify-between items-center p-8'>
              <div className='flex gap-5'>
                <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70' src={user?.photo} alt="User Photo" />
                <div>
                  <h5 className='text-2xl text-white font-semibold'>{user?.name}</h5>
                  <p className='text-xl text-gray-400'>Last seen {moment().subtract('days').calendar()} </p>
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
            <div className='px-5 h-190 w-320 overflow-y-scroll'>
              {smslist.map((smsitem) => (
                <div>
                  {user.id == smsitem.reciverid &&
                    <div className='flex'>
                      <p className='text-md text-white my-1 m-auto'>{moment(smsitem.date, "YYYYMMDD,h:mm:ss a").fromNow()}</p>
                    </div>
                  }
                  {user.id == smsitem.senderid &&
                    <div className='flex'>
                      <p className='text-md text-white my-1 m-auto'>{moment(smsitem.date, "YYYYMMDD,h:mm:ss a").fromNow()}</p>
                    </div>
                  }

                  <div className="w-260 grid grid-cols-2">
                    {/* sender */}
                    <div className='w-170'>
                      {user?.id == smsitem.senderid &&
                        <div className="mb-3 cursor-pointer">
                          <div className={`flex gap-4 items-end ${user?.id == smsitem.senderid ? "" : "justify-end"}`}>
                            {auth.currentUser.uid == smsitem.reciverid &&
                              <img className="w-10 h-10 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70"
                                src={smsitem.senderphoto} alt="Reciver Photo" />
                            }
                            <div className="relative bg-gray-700/90 rounded-t-2xl rounded-br-2xl">
                              <button className="absolute right-1 top-1 cursor-pointer bg-black/20 rounded-2xl p-1 text-sm">
                                <SlArrowDown />
                              </button>
                              <p className="relative text-lg text-white pt-2 px-3 mr-12 mb-4 text-justify">{smsitem.sms}
                                <span className='absolute text-sm text-white -bottom-4 -right-12 px-3'>{moment(smsitem.date, "YYYYMMDD,h:mm:ss a").format("LT")}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>

                    {/* reciver */}
                    <div className='w-170'>
                      {user?.id == smsitem.reciverid &&
                        <div className="mb-3 cursor-pointer">
                          <div className={`flex gap-4 items-end ${user?.id == smsitem.senderid ? "" : "justify-end"}`}>
                            <div className="relative bg-sky-900 rounded-t-2xl rounded-bl-2xl">
                              <button className="absolute right-1 top-1 cursor-pointer bg-black/20 rounded-2xl p-1 text-sm">
                                <SlArrowDown />
                              </button>
                              <p className="relative text-lg text-white pt-2 px-3 mr-12 mb-4 text-justify">{smsitem.sms}
                                <span className='absolute text-sm text-white -bottom-4 -right-12 px-3'>{moment(smsitem.date, "YYYYMMDD,h:mm:ss a").format("LT")}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex w-325  justify-between items-center absolute bottom-0 left-0 bg-sky-900/95 h-25 py-5 px-10'>
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
    </div >
  )
}

export default Message