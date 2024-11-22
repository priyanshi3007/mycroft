import React, { useState } from "react";
import ConfigForm from "./components/ConfigForm";
import LivePreview from "./components/LivePreview";
import "./App.css";

const App = () => {
  const [config, setConfig] = useState({
    configName: "config-1",
    botName: "Greebo",
    fontFamily: "Arial, sans-serif",
    headerColor: "#E63A1E",
    headerFontColor: "#FFFFFF",
    backgroundColor: "#E8E1DB",
    chatFontColor: "#323130",
    avatarImage: "",
    launcherImage: "",
  });

  return (
    <div className="app-container">
      <ConfigForm config={config} setConfig={setConfig} />
      <LivePreview config={config} />
    </div>
  );
};

export default App;
