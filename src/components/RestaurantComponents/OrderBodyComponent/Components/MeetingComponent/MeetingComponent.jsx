import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

const MeetingComponent = () => {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        // Emit the stream to the server
        socket.emit('stream', stream);
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    // Listen for incoming streams from the server
    socket.on('stream', (data) => {
      videoRef.current.srcObject = data;
    });
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted />
    </div>
  );
};

export default MeetingComponent;