
import React from 'react'
import {JitsiMeeting} from "@jitsi/react-sdk"

type props = {
    roomName:string,
    userName:string,
    userEmail:string
}

// {
//   "context": {
//     "user": {
//       "name": "Alice"
//     }
//   },
//   "moderator": true
// }

const ClassWindow:React.FC<props> = ({roomName, userName, userEmail}) => {
  return (
    <div style={{ height: "500px" }}>
      <JitsiMeeting
        domain="meet.jit.si"
        roomName={roomName}
        configOverwrite={{
          startWithAudioMuted: true,
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
        }}
        userInfo={{
          displayName: userName,
          email: userEmail,
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "500px";
        }}
      />
    </div>
  )
}

export default ClassWindow