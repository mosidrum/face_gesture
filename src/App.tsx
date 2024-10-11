import { useState } from "react";
import { useLoadModels } from "./hooks/useLoadModels";
import { VideoCanvas } from "./component";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [initModel, setInitModel] = useState(false);

  useLoadModels(setInitModel);

  return (
    <div className="container text-center mt-5">
      <h3>Face Detection App</h3>
      <div className="mt-3">
        <span
          className={`badge ${initModel ? "bg-success" : "bg-warning"} p-2`}
        >
          {!initModel
            ? " Wait, while Initializing models..."
            : "Models are ready!"}
        </span>
      </div>

      {initModel && <VideoCanvas />}
    </div>
  );
};
