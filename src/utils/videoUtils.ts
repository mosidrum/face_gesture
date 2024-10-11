import { startVideoStream } from "./videoStreamHandler.ts";
import React from "react";

export const toggleVideoStream = async (
  videoRef: React.RefObject<HTMLVideoElement>,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (videoRef.current) {
    if (isPlaying) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      startVideoStream(videoRef);
      await videoRef.current.play();
      setIsPlaying(true);
    }
  }
};
