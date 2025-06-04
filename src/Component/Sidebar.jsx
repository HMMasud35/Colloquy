import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { GrChannel, GrChat } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiUserCommunityFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { userLoginInfo } from '../Slices/userSlice'

const Sidebar = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLoginInfo({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL,
        }))
      } else {
        dispatch(userLoginInfo(null))
        navigate("/login")
      }
    });
  }, [dispatch])

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/login")
    }).catch((error) => {
      alert(error)
    });
  }

  return (
    <div>
      <div className='bg-sky-800/80 w-65 h-screen border-r-3 border-gray-700/80'>
        <div className='border-b-5 border-gray-300 py-3'>
          <img className='m-auto w-30' src="/image/logo.png" alt="logo.png" />
          <h1 className='text-center text-4xl font-bold text-white'>Colloquy</h1>
        </div>
        <ul>
          <li className='hover:bg-gray-800/30 w-full h-20'><Link to={"/"} className='items-center w-full h-full text-2xl text-white flex ' href=""><FaHome className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Deshboard</Link></li>
          <li className='hover:bg-gray-800/30 w-full h-20'><Link to={"/message"} className='items-center w-full h-full text-2xl text-white flex' href=""><GrChat className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Chats</Link></li>
          <li className='hover:bg-gray-800/30 w-full h-20'><a className='items-center w-full h-full text-2xl text-white flex' href=""><FaUserFriends className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Friends</a></li>
          <li className='hover:bg-gray-800/30 w-full h-20'><a className='items-center w-full h-full text-2xl text-white flex' href=""><GrChannel className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Chanel</a></li>
          <li className='hover:bg-gray-800/30 w-full h-20'><a className='items-center w-full h-full text-2xl text-white flex' href=""><RiUserCommunityFill className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Status</a></li>
        </ul>
        <div className='mt-45'>
          <button onClick={handleSignOut} className='mb-30 py-5 hover:bg-gray-800/30 w-full h-full text-2xl text-white flex cursor-pointer'><IoSettingsOutline className='pl-5 w-13 mr-5 text-4xl text-gray-300' />Setting</button>
          <button className='w-full cursor-pointer bg-sky-700 mt-[-110px] p-1 hover:bg-gray-800/30 border-2 border-sky-800 rounded-4xl flex items-center text-xl font-semibold text-white '><img className='w-18 h-18 bg-amber-200 rounded-full mr-3 ' src="" alt="" />name</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar