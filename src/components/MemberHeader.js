import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

function MemberHeader({ members }) {

  const memberObj = {};
  // Looping through the members state to push the unique members (eliminating redundancy) to the member object
  members.forEach(element => {
    if (!memberObj[element.member]) {
      memberObj[element.member] = element.member;
    }
  });
  const memberCount = Object.keys(memberObj).length;

  const closeMember = () => {
    const MemberBarOverlay = document.querySelector(".member-bar");
    MemberBarOverlay.classList.remove("member-bar-overlay");

    const chatSectionOverlay = document.querySelector(".chat-section");
    chatSectionOverlay.classList.remove("chat-section-overlay");

    document.querySelector(".close-member").style.display = "none";
  };

  return (
    <div className="member-header">
      <CloseIcon className="close-member" style={{ fill: "black", display: "none" }} onClick={closeMember} />
      <h2>Channel Participants</h2>
      <h3>{memberCount} Member(s)</h3>
    </div>
  )
}

export default MemberHeader
