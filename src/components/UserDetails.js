import React from 'react'
import { Avatar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
// Zustand (State Management) store
import useStore from '../store'

function UserDetails() {
  const userName = useStore(state => state.userName);
  const userPic = useStore(state => state.userPic)

  const closeChannel = () => {
    const channelBarOverlay = document.querySelector(".channel-bar");
    channelBarOverlay.classList.remove("channel-bar-overlay");

    const chatSectionOverlay = document.querySelector(".chat-section");
    chatSectionOverlay.classList.remove("chat-section-overlay");

    document.querySelector(".close-channel").style.display = "none";
  };

  return (
    <div className="user-details">
      <CloseIcon className="close-channel" style={{ fill: "#FFFFFF", display: "none" }} onClick={closeChannel} />
      <Avatar alt="User Picture" className="user-avatar" src={userPic} />
      <h2>{userName}</h2>
    </div>
  )
}

export default UserDetails
