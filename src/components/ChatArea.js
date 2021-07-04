import React from 'react'

function ChatArea() {
  return (
    <div className="chat-area">
      <div className="chat-message-user">
        <span className="chat-details">[10:15] - John Doe - </span><span className="member-message">Hello Everyone!</span>
      </div>
      <div className="chat-message-member">
        <span className="chat-details">[10:17] - Jane Doe - </span><span className="member-message">Yay! New channel hype!</span>
      </div>
      <div className="chat-message-member">
        <span className="chat-details">[10:17] - Jake Doe - </span><span className="member-message">Played any fun games lately?</span>
      </div>
    </div>
  )
}

export default ChatArea
