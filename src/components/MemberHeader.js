import React from 'react'

function MemberHeader({ members }) {

  const memberObj = {};
  // Looping through the members state to push the unique members (eliminating redundancy) to the member object
  members.forEach(element => {
    if (!memberObj[element.member]) {
      memberObj[element.member] = element.member;
    }
  });
  const memberCount = Object.keys(memberObj).length;

  return (
    <div className="member-header">
      <h2>Channel Participants</h2>
      <h3>{memberCount} Member(s)</h3>
    </div>
  )
}

export default MemberHeader
