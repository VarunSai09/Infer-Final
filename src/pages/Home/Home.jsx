import React from "react";

import HomePage from "./HomePage";
import Navbar from "../../components/Navbar";
const Home=({setSearch,searchHistory,setUserDetails})=> {
  return (
    <>

     <HomePage setSearch={setSearch}  setUserDetails={setUserDetails}/>
    </>
  );
}

export default Home;
