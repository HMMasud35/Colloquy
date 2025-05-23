import React from 'react'
import UserList from '../Component/UserList'
import FriendRequest from '../Component/FriendRequest'
import Friends from '../Component/Friends'
import GroupRequest from '../Component/GroupRequest'
import MyGroups from '../Component/MyGroups'
import Blocked from '../Component/Blocked'

const Deshboard = () => {
  return (
    <div className='p-5 grid grid-cols-3 w-full gap-5'>
      <UserList />
      <FriendRequest />
      <Friends />
      <GroupRequest />
      <MyGroups />
      <Blocked />
    </div>
  )
}

export default Deshboard