import React from 'react'

function ChannelList() {
  return (
    <div className="channel-list">
      <ul>
        <li className="selected-channel"><a href="#">Gaming Room</a></li>
        <li><a href="#" className="channel-link">TV and Music</a></li>
        <li><a href="#" className="channel-link">Tech Hub</a></li>
        <li><a href="#" className="channel-link">Cooking Corner</a></li>
        <li><a href="#" className="channel-link">Art and Craft</a></li>
        <li><a href="#" className="channel-link">Business</a></li>
      </ul>
    </div>
  )
}

export default ChannelList
