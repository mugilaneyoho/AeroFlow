import React, { useEffect, useState } from "react";
import { OpenVidu } from "openvidu-browser";
import VideoCard from "./VedioCard";

export default function VideoRoom() {
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    joinSession();
  }, []);

async function joinSession() {
  const OV = new OpenVidu();
  const mySession = OV.initSession();

  // Subscribe to new streams
  mySession.on("streamCreated", (event) => {
    const subscriber = mySession.subscribe(event.stream, undefined);
    setSubscribers((prev) => [...prev, subscriber]);
  });

  mySession.on("streamDestroyed", (event) => {
    setSubscribers((prev) =>
      prev.filter((sub) => sub !== event.stream.streamManager)
    );
  });

  // 1️⃣ Create/get session from backend
  const sessionRes = await fetch("http://localhost:3000/openvidu/session", { method: "POST" });
  const sessionData = await sessionRes.json();
  const sessionId = sessionData.sessionId;

  // 2️⃣ Request token
  const tokenRes = await fetch("http://localhost:3000/openvidu/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId }),
  });
  const tokenData = await tokenRes.json();

  // 3️⃣ Connect
  try {
    await mySession.connect(tokenData.token);
  } catch (err) {
    console.error("Failed to connect:", err);
    return;
  }

  // 4️⃣ Publish your video
  const myPublisher = OV.initPublisher(undefined, {
    audio: true,
    video: true,
    resolution: "640x480",
  });
  mySession.publish(myPublisher);

  setSession(mySession);
  setPublisher(myPublisher);
}

  return (
    <div>
      <h2>Video Room</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Your video */}
        {publisher && (
          <VideoCard streamManager={publisher} />
        )}

        {/* Other participants */}
        {subscribers.map((sub, index) => (
          <VideoCard key={index} streamManager={sub} />
        ))}
      </div>
    </div>
  );
}