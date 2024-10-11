import { useRef, useState } from "react";
import { useFaceDetection } from "../../hooks";
import { videoHeight, videoWidth } from "../../types";
import { toggleVideoStream } from "../../utils";

export const VideoCanvas = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useFaceDetection(videoRef, canvasRef);

  const handleToggleVideo = async () => {
    await toggleVideoStream(videoRef, isPlaying, setIsPlaying);
  };

  return (
    <div className="text-center mt-4">
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            position: "relative",
            width: videoWidth,
            height: videoHeight,
          }}
        >
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
      </div>
      <div className="mt-4">
        <button
          className={`btn ${isPlaying ? "btn-danger" : "btn-primary"}`}
          onClick={handleToggleVideo}
        >
          {isPlaying ? "Stop Video" : "Start Video"}
        </button>
      </div>
    </div>
  );
};
