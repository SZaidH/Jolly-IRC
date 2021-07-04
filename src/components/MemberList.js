import React from 'react'
import { Avatar } from '@material-ui/core'

function MemberList() {
  return (
    <div className="member-list">
      <ul>
        <li>
          <div className="member-item">
            <Avatar alt="Member Picture" className="member-avatar" src="https://avatars.dicebear.com/api/male/abd.svg" />
            <p>John Doe</p>
          </div>
        </li>
        <li>
          <div className="member-item">
            <Avatar alt="Member Picture" className="member-avatar" src="https://avatars.dicebear.com/api/female/abd.svg" />
            <p>Jane Doe</p>
          </div>
        </li>
        <li>
          <div className="member-item">
            <Avatar alt="Member Picture" className="member-avatar" src="https://avatars.dicebear.com/api/male/aef.svg" />
            <p>Jake Doe</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MemberList
