import React from 'react'
import { Avatar } from '@material-ui/core'
// Zustand (State Management) store
import useStore from '../store'

function UserDetails() {
  const userName = useStore(state => state.userName);
  const userPic = useStore(state => state.userPic)
  return (
    <div className="user-details">
      <Avatar alt="User Picture" className="user-avatar" src={userPic} />
      <h2>{userName}</h2>
    </div>
  )
}

export default UserDetails
