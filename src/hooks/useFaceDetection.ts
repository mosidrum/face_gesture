import React, { useEffect } from "react";
import * as faceapi from "face-api.js";
import { videoHeight, videoWidth } from "../types";

export const useFaceDetection = (
  videoRef: React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
) => {
  useEffect(() => {
    const handleVideoOnPlay = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const displaySize = { width: videoWidth, height: videoHeight };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        if (videoRef.current) {
          try {
            const detections = await faceapi
              .detectAllFaces(
                videoRef.current,
                new faceapi.TinyFaceDetectorOptions(),
              )
              .withFaceLandmarks()
              .withFaceExpressions()
              .withAgeAndGender();

            const resizedDetections = faceapi.resizeResults(
              detections,
              displaySize,
            );

            const ctx = canvas.getContext("2d");
            ctx?.clearRect(0, 0, videoWidth, videoHeight);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

            resizedDetections.forEach((detection) => {
              const { age, gender, genderProbability, expressions } = detection;
              const { x, y } = detection.detection.box;
              const highestExpression = Object.keys(expressions).reduce(
                (a, b) =>
                  (expressions[a as keyof faceapi.FaceExpressions] >
                  expressions[b as keyof faceapi.FaceExpressions]
                    ? a
                    : b) as keyof faceapi.FaceExpressions,
              );

              ctx!.font = "14px Arial";
              ctx!.fillStyle = "red";
              ctx!.fillText(`Age: ${Math.round(age)}`, x, y - 20);
              ctx!.fillText(
                `Gender: ${gender} (${(genderProbability * 100).toFixed(1)}%)`,
                x,
                y - 5,
              );
              ctx!.fillText(`Expression: ${highestExpression}`, x, y + 10);
            });
          } catch (error) {
            console.error("Detection error:", error);
          }
        }
      }, 1000);
    };

    videoRef.current?.addEventListener("play", handleVideoOnPlay);

    return () =>
      videoRef.current?.removeEventListener("play", handleVideoOnPlay);
  }, [videoRef, canvasRef]);
};
