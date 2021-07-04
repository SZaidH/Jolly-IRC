import React from 'react'
import ChatHeader from './ChatHeader'
import ChatArea from './ChatArea'
import ChatInput from './ChatInput'

function ChatSection() {
  return (
    <section className="chat-section">
      <ChatHeader />
      <ChatArea />
      <ChatInput />
    </section>
  )
}

export default ChatSection
