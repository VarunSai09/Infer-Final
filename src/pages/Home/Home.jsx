import React from "react";

import HomePage from "./HomePage";
import Navbar from "../../components/Navbar";
const Home=({setSearch})=> {
  return (
    <>
      <Navbar />    
      <HomePage setSearch={setSearch} />
    </>
  );
}

export default Home;