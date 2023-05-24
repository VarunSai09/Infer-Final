import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileData from "./ProfileData";
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
      
      <ProfileNav />
      <ProfileData />
    </>
  );
}
