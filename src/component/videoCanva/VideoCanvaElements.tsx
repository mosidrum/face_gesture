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
  <div
    className="position-relative w-100"
    style={{ maxWidth: `${videoWidth}px`, height: `${videoHeight}px` }}
  >
    <video
      ref={videoRef}
      muted
      className={`position-absolute top-0 start-0 ${isPlaying ? "d-block" : "d-none"}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
    <canvas
      ref={canvasRef}
      className={`position-absolute top-0 start-0 w-100 h-100 ${isPlaying ? "d-block" : "d-none"}`}
      style={{ objectFit: "contain" }}
    />
  </div>
);
