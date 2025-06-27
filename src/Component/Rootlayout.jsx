import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import MessagesList from './MessageList'


const Rootlayout = () => {
  return (
    <main className='flex'>
      <Sidebar/>
      <Outlet/>
    </main>
  )
}

export default Rootlayout