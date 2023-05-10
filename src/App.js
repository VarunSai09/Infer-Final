import React from "react";
import "../src/Styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import BounceLoader from "react-spinners/BounceLoader";

// PAGES'
import Signup from "./pages/SignUp/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";
import Search from "./pages/SearchScreen/search";
import Notes from "./pages/Notes/Notes"
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { searchData } from "./api/googleSearch";
import { updateUser } from "./api/updateUserData";
import {retreiveUser} from "./api/retreiveDetails"
// import addNote from "./pages/Saved/addNote/addNote";

export default function App(props) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [userID, setUserID] = useState("");
  const [googleData, setGoogleData] = useState({});
  const [searchHistory,setSearchHistory]=useState(null);
  const [userDataSignup, setuserDataSignup] = useState("");
  const [userDataUpdate, setUserDataUpdate] = useState("");
  const [loading,setLoading]=useState(false)
   useEffect(() => {
     const id = localStorage.getItem("UserId");
      setUserID(id);
  })
  const setSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true)
    const id = localStorage.getItem("UserId");
    const data = await searchData(term, id);
    console.log(data);
    setGoogleData(data.response);
    history.push("/search");
    setLoading(false)
  };
  //-----User DATA Retreival---//
  
  const setUserDetails=async()=>{
    const id = localStorage.getItem("UserId");
    const retreivedDetails = await retreiveUser(id);
    const retreivedDe=retreivedDetails.data.body[0].SearchList
    const Ret=retreivedDe.split(',');
    console.log(typeof(retreivedDetails.data.body[0].SearchList))
    setSearchHistory(Ret)
    console.log(searchHistory)
    console.log(typeof(searchHistory))
    console.log(Ret)
  }


  //-------User Data Update------//
  const setupdateDataUser = async (name, email, userId, mobileNumber) => {
    setuserDataSignup({
      name: name,
      email: email,
      userId: userId,
      mobileNumber: mobileNumber,
    });
    const result = await updateUser(name, email, userId, mobileNumber);
    console.log(result);
  };
  // const setupdateDataUser = async (name, email, mobileNumber, userId) => {
  //   setUserDataUpdate({
  //     name: name,
  //     email: email,
  //     mobileNumber: mobileNumber,
  //     userId: userId
  //   });
  //   const result = await updateUser(name, email, mobileNumber, userId);
  //   console.log(result);
  // };

  return (
    <div className="App">
      
      
      {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/signup"
          component={() => <Signup  />}
        />
        <Route
          exact
          path="/home"
          component={() => <Home setSearch={setSearch} searchHistory={searchHistory} setUserDetails={setUserDetails} />}
        />
        <Route
          exact
          path="/search"
          component={() => (
            <Search
              searchTerm={searchTerm}
              setSearch={setSearch}
              // userID={userID}
              googleData={googleData}
            />
          )}
        />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/notes" component={Notes} />
        {/* <Route exact path="/saved/add-note" component={addNote} /> */}
        <Route
          exact
          path="/profile"
          component={() => <Profile setupdateDataUser={setupdateDataUser} />}
        />
        <Route exact path="/settings" component={Settings} />
      </Switch>
      {loading && <BounceLoader color="#787e83" size={70} className="spinner" />}
    </div>
  );
}
