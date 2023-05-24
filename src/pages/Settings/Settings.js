import React from "react";
import SettingsNav from "./SettingsNav";
import SettingsData from "./SettingsData";
import Navbar from "../../components/Navbar";
import {  useEffect } from "react";
import { useHistory } from "react-router-dom";

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
