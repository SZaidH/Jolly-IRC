import React from 'react'
// Material UI Icon
import AddCircleIcon from '@material-ui/icons/AddCircle';
// Firebase DB Config
import db from '../firebase'

function ChannelCreate() {

  const createChannel = () => {
    const channelName = prompt("Please enter the Channel Name");
    const channelDescription = prompt(`Please enter the Channel Description for ${channelName}`);

    if (channelName && channelDescription) {
      db.collection('channels').add({
        name: channelName,
        description: channelDescription
      })
    } else {
      alert("Please enter a valid Channel Name.");
    }
  }

  return (
    <div className="channel-create" onClick={createChannel}>
      <button ><AddCircleIcon className="create-button-icon" />Create Channel</button>
    </div>
  )
}

export default ChannelCreate
