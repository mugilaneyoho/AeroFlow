import React, { useEffect, useRef } from "react";

export default function VideoCard({ streamManager }) {
  const videoRef = useRef();

  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return (
    <video
      autoPlay
      ref={videoRef}
      style={{ width: "300px", margin: "10px" }}
    />
  );
}