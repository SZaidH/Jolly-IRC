import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
// Zustand (State Management) store
import useStore from '../store'
import firebase from 'firebase';

function ChatInput() {
  const [message, setMessage] = useState("");
  const { channelID } = useParams();
  const userName = useStore(state => state.userName);

  const sendMessage = e => {
    e.preventDefault();

    db.collection('channels')
      .doc(channelID)
      .collection('messages')
      .add({
        message: message,
        member: userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    setMessage("");
  }

  return (
    <div className="chat-input">
      <form>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          size="150"
          placeholder="Send Message" />
        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>
    </div>
  )
}

export default ChatInput
