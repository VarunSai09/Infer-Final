// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import {  useEffect } from "react";
import { useHistory } from "react-router-dom";

//importing pages
import SettingsNav from "./SettingsNav";
import SettingsData from "./SettingsData";

export default function Profile() {
  const history=useHistory('')
  useEffect(() => {
    if(!localStorage.getItem('UserId')){
      history.push('/')
    }
  })
  return (
    <>
      <SettingsNav />
      <SettingsData />
    </>
  );
}
