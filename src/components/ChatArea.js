import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase';
// Zustand (State Management) store
import useStore from '../store'

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const { channelID } = useParams();
  const userName = useStore(state => state.userName);
  const messagesEndRef = useRef(null);

  // Function which forces the component selected to be scrolled to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (channelID) {
      db.collection("channels")
        .doc(channelID)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot =>
          setMessages(snapshot.docs.map(doc =>
            doc.data()
          )
          )
        )
    }
  }, [channelID]);

  const messageList = messages.map((message, index) => (
    <div key={index} className={message.member === userName ? "chat-message-user" : "chat-message-member"}>
      <span className="chat-details">
        [{new Date(message.timestamp?.toDate()).getHours()} : {new Date(message.timestamp?.toDate()).getMinutes()}] - {message.member} -
      </span>
      <span className="member-message"> {message.message}</span>
    </div>
  ))

  return (
    <div className="chat-area">
      {
        messages === "" ?
          null :
          messageList
      }
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatArea
