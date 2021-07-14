import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase'

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
  return (
    <header className="chat-header">
      <h4 className="channel-name">{channelName}</h4><span>{channelDesc}</span>
    </header>
  )
}

export default ChatHeader
