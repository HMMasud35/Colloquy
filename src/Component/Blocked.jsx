import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";

const Block = () => {
  const [blockList, setblockList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const blockRef = ref(db, "block/");
    onValue(blockRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        if (
          auth.currentUser.uid == item.val().blockbyuserid
        ) {
          array.push({ ...item.val(), id: item.key });
        }
      });
      setblockList(array);
    });
  }, []);

  const handleUnblockList = (item) => {
    if (auth.currentUser.uid == item.blockbyuserid) {
      set(push(ref(db, 'friends/')), {
        sendername: item.blockbyusername,
        senderid: item.blockbyuserid,
        senderphoto: item.blockbyuserphoto,
        recivername: item.blockusername,
        reciverid: item.blockuserid,
        reciverphoto: item.blockuserphoto
      }).then(() => {
        remove(ref(db, "block/" + item.id))
      })
    }
  }

  return (
    <div>
      <div className='w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3'>
        <h2 className='text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md'>Block List</h2>
        <ul className='h-90 overflow-y-scroll p-1'>
          {blockList.map((item) => (
            <li className='flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35'>
              <div className='flex gap-4 items-center'>
                {auth.currentUser.uid == item.blockbyuserid ? (
                  <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70'
                    src={item.blockuserphoto} alt="Friends Photo" />
                ) : (
                  <img className='w-17 h-17 my-1 rounded-full border-3 border-white/50 shadow-sm shadow-black/70'
                    src={item.blockbyuserphoto} alt="Friends Photo" />
                )}
                <div className=''>
                  {auth.currentUser.uid == item.blockbyuserid ? (
                    <h3 className='text-2xl font-medium'>
                      {item.blockusername}</h3>
                  ) : (
                    <h3 className='text-2xl font-medium'>
                      {item.blockbyusername}</h3>
                  )}
                  <h5 className='text-md'>Last seen Date & Time</h5>
                </div>
              </div>
              <button onClick={() => handleUnblockList(item)} className="px-4 py-2 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 ">
                Unblock
              </button>
              {/* <a href=""><CiMenuKebab className='h-10 bg-sky-700 rounded-md text-xl text-white hover:bg-sky-900 ' /></a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Block
