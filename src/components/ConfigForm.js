import React from "react";
import ColorPicker from "./ColorPicker";

const ConfigForm = ({ config, setConfig }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadConfig = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${config.configName}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const loadConfig = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig(JSON.parse(reader.result));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="config-form">
      <input
        type="text"
        name="configName"
        value={config.configName}
        onChange={handleInputChange}
        placeholder="Config Name"
      />
      <input
        type="text"
        name="botName"
        value={config.botName}
        onChange={handleInputChange}
        placeholder="Bot Name"
      />
      <select name="fontFamily" value={config.fontFamily} onChange={handleInputChange}>
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Space Grotesk', sans-serif">Space Grotesk</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
      </select>
      <ColorPicker label="Header Color" name="headerColor" value={config.headerColor} onChange={handleInputChange} />
      <ColorPicker
        label="Header Font Color"
        name="headerFontColor"
        value={config.headerFontColor}
        onChange={handleInputChange}
      />
      <ColorPicker
        label="Background Color"
        name="backgroundColor"
        value={config.backgroundColor}
        onChange={handleInputChange}
      />
      <ColorPicker
        label="Chat Font Color"
        name="chatFontColor"
        value={config.chatFontColor}
        onChange={handleInputChange}
      />
      <label>
        Avatar Image:
        <input type="file" name="avatarImage" onChange={handleFileChange} />
      </label>
      <label>
        Launcher Image:
        <input type="file" name="launcherImage" onChange={handleFileChange} />
      </label>
      <button onClick={downloadConfig}>Download Config</button>
      <input type="file" onChange={loadConfig} />
    </div>
  );
};

export default ConfigForm;
