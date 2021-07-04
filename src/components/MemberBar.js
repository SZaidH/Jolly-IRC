import React from 'react'
import MemberHeader from './MemberHeader'
import MemberList from './MemberList'

function MemberBar() {
  return (
    <aside className="member-bar">
      <MemberHeader />
      <MemberList />
    </aside>
  )
}

export default MemberBar
