import React from 'react'
import { Avatar } from '@material-ui/core'

function UserDetails() {
  return (
    <div className="user-details">
      <Avatar alt="User Picture" className="user-avatar" src="https://avatars.dicebear.com/api/male/abd.svg" />
      <h2>John Doe</h2>
    </div>
  )
}

export default UserDetails
