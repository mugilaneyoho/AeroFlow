import React, { useEffect, useRef } from 'react'
import { OpenVidu as OpenViduService } from "openvidu-browser"

const OpenVidu:React.FC = () => {

 const videoRef = useRef();

  useEffect(() => {
    joinSession();
  }, []);

  async function joinSession() {
    const OV = new OpenViduService();
    const session = OV.initSession();

    // 👇 Handle other users joining
    session.on("streamCreated", (event) => {
      const subscriber = session.subscribe(event.stream, undefined);
      subscriber.addVideoElement(videoRef.current);
    });

    // 1️⃣ Create session
    const sessionRes = await fetch("http://localhost:3000/video/session", {
      method: "POST",
    });
    const sessionData = await sessionRes.json();
    const sessionId = sessionData.id;

    // 2️⃣ Get token
    const tokenRes = await fetch("http://localhost:3000/video/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });
    const tokenData = await tokenRes.json();

    // 3️⃣ Connect
    await session.connect(tokenData.token);

    // 4️⃣ Publish (your camera)
    const publisher = OV.initPublisher(undefined, {
      audio: true,
      video: true,
      resolution: "640x480",
    });

    session.publish(publisher);
  }

  return (
    <div>
      <h2>Video Call</h2>
      <video autoPlay ref={videoRef} />
    </div>
  );
}

export default OpenVidu