import React from "react";

export const startVideoStream = (
  videoRef: React.RefObject<HTMLVideoElement>,
) => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    })
    .catch((err) => {
      console.error("Error accessing media devices:", err);
    });
};
