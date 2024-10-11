import { useRef, useEffect } from "react";
import { startVideoStream } from "../../utils";
import { useFaceDetection } from "../../hooks";
import { videoHeight, videoWidth } from "../../types";

export const VideoCanvas = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      startVideoStream(videoRef);
    }
  }, []);

  useFaceDetection(videoRef, canvasRef);

  return (
    <div
      style={{ position: "relative", width: videoWidth, height: videoHeight }}
    >
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          height={videoHeight}
          width={videoWidth}
          style={{ position: "absolute", top: 0, left: 0 }}
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
          }}
        />
      </div>
    </div>
  );
};
