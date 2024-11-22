import React from "react";
import "./LivePreview.css";

const LivePreview = ({ config }) => {
  const {
    botName,
    fontFamily,
    headerColor,
    headerFontColor,
    backgroundColor,
    chatFontColor,
    avatarImage,
  } = config;

  return (
    <div className="live-preview">
      <div
        className="chat-header"
        style={{ backgroundColor: headerColor, color: headerFontColor, fontFamily }}
      >
        {avatarImage && <img src={avatarImage} alt="Avatar" className="avatar" />}
        <span>{botName}</span>
      </div>
      <div className="chat-body" style={{ backgroundColor, color: chatFontColor }}>
        Hi! I'm {botName}. How can I assist you today?
      </div>
    </div>
  );
};

export default LivePreview;
