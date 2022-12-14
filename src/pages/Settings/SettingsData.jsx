import React, { useState } from "react";
import "./SettingData.css"
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
export default function Settings() {
  const [lightTheme,setLightTheme]=useState('false');
  const [darkTheme,setDarkTheme]=useState('false');
  const lightThemeSelect=()=>{
    setLightTheme('true');
  }
  const darkThemeSelect=()=>{
    setDarkTheme('true');
  }
  return (
    <div className="settings">
      <div id="theme">
        <label className="theme-headings">THEME</label>
        <p className="theme-subhead">Adjust theme</p>
        <div className="Theme-Options">
          <button className="Theme-Light" onClick={lightThemeSelect}>
              <span className="Light-Theme">Light</span>
              <span className="light-theme-check"><BsIcons.BsCheckCircleFill /></span>
          </button>
          <button className="Theme-Dark" onClick={darkThemeSelect}>
          
          
              <span className="Dark-Theme">Dark</span>
          </button>
        </div>
      </div>
      <div id="history">
        <label className="history-headings">SEARCH HISTORY</label>
        <p className="history-subhead">Clear History</p>
        <button className="history-options">
        <span className="history-clear-icon"><AiIcons.AiOutlineCloseCircle /></span>
              <span className="history-clear">Clear HIstory</span>
       </button>
      </div>
    </div>
  );
}
