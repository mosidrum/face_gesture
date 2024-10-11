import { useState } from "react";
import { VideoCanvas } from "./component";
import { useLoadModels } from "./hooks/useLoadModels.ts";

export const App = () => {
  const [initModel, setInitModel] = useState(false);

  useLoadModels(setInitModel);

  return (
    <div>
      <span>{!initModel ? "Initializing models..." : "Models ready!"}</span>
      {initModel && <VideoCanvas />}
    </div>
  );
};
