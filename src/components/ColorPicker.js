import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ label, name, value, onChange }) => {
  const handleColorChange = (color) => {
    onChange({ target: { name, value: color.hex } });
  };

  return (
    <div>
      <label>{label}</label>
      <SketchPicker color={value} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
