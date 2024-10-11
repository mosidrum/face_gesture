import React from "react";

export const videoWidth = 640;
export const videoHeight = 480;

export interface FaceDetectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}
