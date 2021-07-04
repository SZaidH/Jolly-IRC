import React from 'react'
// Material UI Icon
import AddCircleIcon from '@material-ui/icons/AddCircle';

function ChannelCreate() {
  return (
    <div className="channel-create">
      <button><AddCircleIcon className="create-button-icon" />Create Channel</button>
    </div>
  )
}

export default ChannelCreate
