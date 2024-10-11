import React from "react";
import { videoHeight, videoWidth } from "../../types";

interface VideoCanvasElementsProps {
  isPlaying: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const VideoCanvaElements: React.FC<VideoCanvasElementsProps> = ({
  isPlaying,
  videoRef,
  canvasRef,
}) => (
  <div style={{ position: "relative", width: videoWidth, height: videoHeight }}>
    <video
      ref={videoRef}
      muted
      height={videoHeight}
      width={videoWidth}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        visibility: isPlaying ? "visible" : "hidden",
      }}
    />
    <canvas
      ref={canvasRef}
      height={videoHeight}
      width={videoWidth}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        visibility: isPlaying ? "visible" : "hidden",
      }}
    />
  </div>
);
