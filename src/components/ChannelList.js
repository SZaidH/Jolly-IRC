import React from 'react'
import { useState, useEffect } from 'react'
//Firebase DB config
import db from '../firebase'
// Router Link
import { NavLink } from 'react-router-dom';

function ChannelList() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })
      ))
    })
  }, []);

  const closeChannel = () => {
    const channelBarOverlay = document.querySelector(".channel-bar");
    channelBarOverlay.classList.remove("channel-bar-overlay");

    const chatSectionOverlay = document.querySelector(".chat-section");
    chatSectionOverlay.classList.remove("chat-section-overlay");

    document.querySelector(".close-channel").style.display = "none";
  };

  return (
    <div className="channel-list">
      <ul>
        {channels.map(channel => (
          <NavLink to={`/channels/${channel.id}`} key={channel.id} activeClassName='selected-channel' style={{ textDecoration: 'none' }} onClick={() => closeChannel()}>
            <li key={channel.id} id={channel.id} className="channel-link">
              {channel.data.name}
            </li>
          </NavLink>
        ))
        }
      </ul>
    </div >
  )
}

export default ChannelList