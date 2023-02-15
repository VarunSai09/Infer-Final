import React from "react";
import "../src/Styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
// PAGES'
import Signup from "./pages/SignUp/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";
import Search from "./pages/SearchScreen/search";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { searchData } from "./api/googleSearch";
import { registerUser } from "./api/userRegister";
import { updateUser } from "./api/updateUserData";
// import addNote from "./pages/Saved/addNote/addNote";

export default function App(props) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [userID, setUserID] = useState("");
  const [googleData, setGoogleData] = useState({});
  const [userDataSignup, setuserDataSignup] = useState("");
  const [userDataUpdate, setUserDataUpdate] = useState("");
   useEffect(() => {
     const id = localStorage.getItem("UserId");
      setUserID(id);
  })
  const setSearch = async (term) => {
    setSearchTerm(term);
    const id = localStorage.getItem("UserId");
    
    console.log("------------")
    console.log(userID)
    const data = await searchData(term, id);
    console.log(data);
    setGoogleData(data);
    history.push("/search");
  };
  //------USER REGISTRATION-------//
  const setUserRegister = async (
    name,
    email,
    passwordConfirm,
    mobileNumber
  ) => {
    setuserDataSignup({
      name: name,
      email: email,
      passwordConfirm: passwordConfirm,
      mobileNumber: mobileNumber,
    });
    const result_1 = await registerUser(
      name,
      email,
      passwordConfirm,
      mobileNumber
    );
    console.log(result_1);
  };

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
          component={() => <Signup setUserRegister={setUserRegister} />}
        />
        <Route
          exact
          path="/home"
          component={() => <Home setSearch={setSearch} />}
        />
        <Route
          exact
          path="/search"
          component={() => (
            <Search
              searchTerm={searchTerm}
              // userID={userID}
              googleData={googleData}
            />
          )}
        />
        <Route exact path="/saved" component={Saved} />
        {/* <Route exact path="/saved/add-note" component={addNote} /> */}
        <Route
          exact
          path="/profile"
          component={() => <Profile setupdateDataUser={setupdateDataUser} />}
        />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
