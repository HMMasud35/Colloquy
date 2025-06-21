import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { auth } from "../firebase.config";

const FriendRequest = () => {
  const [requestList, setRequestList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const requestRef = ref(db, "frendrequest/");
    onValue(requestRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        if (
          auth.currentUser.uid == item.val().reciverid
        ) {
          array.push({ ...item.val(), id: item.key });
        }
      });
      setRequestList(array);
    });
  }, []);

  const handleFrindAccept = (item) => {
    const db = getDatabase();
    set(push(ref(db, 'friends/')), {
      ...item
    }).then(() => {
      remove(ref(db, "frendrequest/" + item.id))
    })
  }

  const handleRequestCancle = (item) => {
    const db = getDatabase();
    set(push(ref(db, 'userlist/')), {
      ...item
    }).then(() => {
      remove(ref(db, "frendrequest/" + item.id))
    })
  }

  //date
  // const cDate = new Date().toLocaleDateString()
  // const [date, setDate] = useState(cDate)

  // const updateDate = () => {
  //   const newDate = new Date().toLocaleDateString()
  //   setDate(newDate)
  // }

  // useEffect(() => {
  //   const DateInterval = setInterval(updateDate)
  //   return () => {
  //     clearInterval(DateInterval)
  //   }
  // }, [date])

  return (
    <div>
      <div className="w-full h-110 bg-sky-100/40 rounded-2xl border-2 border-sky-100/80 shadow-2xl shadow-sky-900 p-3">
        <h2 className="text-3xl text-white font-semibold text-center bg-sky-800 py-2 rounded-md">
          Friend Request
        </h2>
        <ul className="h-90 overflow-y-scroll p-1">
          {requestList.map((item) => (
            <li className="flex justify-between items-center px-2 mb-1 border-b-3 border-gray-500/80 bg-sky-100/20 rounded-md hover:bg-sky-100/35">
              <div className="flex gap-4 items-center">
                <img
                  className="w-17 h-17 my-1 rounded-full bg-teal-700"
                  src={item.senderphoto}
                  alt="Request User Photo"
                />
                <div className="">
                  <h3 className="text-2xl font-medium">{item.sendername}</h3>
                  <h5 className="text-md">Request Date</h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleFrindAccept(item)} className="px-4 py-2 bg-sky-700 rounded-xl text-xl text-white hover:bg-sky-900 ">
                  Accept
                </button>
                <button onClick={() => handleRequestCancle(item)} className="px-2 py-2 bg-sky-700 rounded-xl text-white hover:bg-red-900 ">
                  <IoCloseOutline className="text-3xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendRequest;
