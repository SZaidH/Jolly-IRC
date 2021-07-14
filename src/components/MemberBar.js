import React from 'react'
import MemberHeader from './MemberHeader'
import MemberList from './MemberList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase';


function MemberBar() {
  const [members, setMembers] = useState([]);
  const { channelID } = useParams();

  useEffect(() => {
    if (channelID) {
      db.collection("channels")
        .doc(channelID)
        .collection("messages")
        .onSnapshot(snapshot =>
          setMembers(snapshot.docs.map(doc =>
            doc.data()
          )
          )
        )
    }
  }, [channelID]);

  return (
    <aside className="member-bar">
      <MemberHeader members={members} />
      <MemberList members={members} />
    </aside>
  )
}

export default MemberBar
