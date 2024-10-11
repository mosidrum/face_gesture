import { useRef, useState } from "react";
import { useFaceDetection } from "../../hooks";
import { toggleVideoStream } from "../../utils";
import { VideoCanvaElements } from "./VideoCanvaElements.tsx";

export const VideoCanvas = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useFaceDetection(videoRef, canvasRef);

  const handleToggleVideo = async () => {
    await toggleVideoStream(videoRef, isPlaying, setIsPlaying);
  };

  return (
    <div className="text-center mt-4">
      <div className="d-flex justify-content-center align-items-center">
        <VideoCanvaElements
          isPlaying={isPlaying}
          videoRef={videoRef}
          canvasRef={canvasRef}
        />
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
