import { useEffect } from "react";
import * as faceapi from "face-api.js";

export const useLoadModels = (
  setInitModel: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // Path to models
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
          faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
        ]);
        setInitModel(true);
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    loadModels();
  }, [setInitModel]);
};
