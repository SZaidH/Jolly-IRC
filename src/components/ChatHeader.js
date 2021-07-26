import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase'
// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';

function ChatHeader() {
  const [channelName, setChannelName] = useState();
  const [channelDesc, setchannelDesc] = useState();
  const { channelID } = useParams();

  useEffect(() => {
    if (channelID) {
      db.collection('channels').doc(channelID).onSnapshot(snapshot => {
        setChannelName(snapshot.data().name)
        setchannelDesc(snapshot.data().description)
      }
      )
    }
  }, [channelID]);

  const openChannelBar = () => {
    const channelBarOverlay = document.querySelector(".channel-bar");
    channelBarOverlay.classList.add("channel-bar-overlay");

    const chatSectionOverlay = document.querySelector(".chat-section");
    chatSectionOverlay.classList.add("chat-section-overlay");

    document.querySelector(".close-channel").style.display = "inline-block";
  }

  const openMemberBar = () => {
    const MemberBarOverlay = document.querySelector(".member-bar");
    MemberBarOverlay.classList.add("member-bar-overlay");

    const chatSectionOverlay = document.querySelector(".chat-section");
    chatSectionOverlay.classList.add("chat-section-overlay");

    document.querySelector(".close-member").style.display = "inline-block";
  }

  return (
    <header className="chat-header">
      <MenuIcon className="menu-icon" onClick={openChannelBar} />
      <div className="channel-details">
        <h4 className="channel-name">{channelName}</h4><span>{channelDesc}</span>
      </div>
      <GroupIcon className="group-icon" onClick={openMemberBar} />
    </header>
  )
}

export default ChatHeader