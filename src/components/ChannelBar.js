import React from 'react'
import UserDetails from './UserDetails'
import ChannelList from './ChannelList'
import ChannelCreate from './ChannelCreate'

function ChannelBar() {
  return (
    <aside className="channel-bar">
      <UserDetails />
      <ChannelList />
      <ChannelCreate />
    </aside>
  )
}

export default ChannelBar
