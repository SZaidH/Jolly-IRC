import React from 'react'
import { Avatar } from '@material-ui/core'

function MemberList({ members }) {

  const memberObj = {};
  // Looping through the members state to push the unique members (eliminating redundancy) to the member object
  members.forEach(element => {
    if (!memberObj[element.member]) {
      memberObj[element.member] = element.member;
    }
  });

  const memberList = Object.keys(memberObj).map((memberKey, i) => (
    <li key={i}>
      <div className="member-item">
        {/* Passing the member key to the Dicebear API URL to fetch initials for the User Avatar */}
        <Avatar alt="Member Picture" className="member-avatar" src={`https://avatars.dicebear.com/api/initials/${memberObj[memberKey]}.svg`} />
        <p>{memberObj[memberKey]}</p>
      </div>
    </li>
  ))

  return (
    <div className="member-list">
      <ul>
        {!memberObj ? null : memberList}
      </ul>
    </div>
  )
}

export default MemberList
