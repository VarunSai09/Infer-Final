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
import Notes from "./pages/Notes/Notes";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { searchData } from "./api/googleSearch";

export default function App(props) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [userID, setUserID] = useState("");
  const [googleData, setGoogleData] = useState({});

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("UserId");
    setUserID(id);
  });
  const setSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    const id = localStorage.getItem("UserId");
    console.log(id);
    const data = await searchData(term, id);
    console.log(data);
    setGoogleData(data.response);
    history.push("/search");
    setLoading(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          render={({ location }) => {
            if (location.pathname === "/" || location.pathname === "/signup") {
              return null;
            }
            return <Navbar />;
          }}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/home"
          component={() => <Home />}
        />
        <Route
          exact
          path="/search"
          component={() => (
            <Search
              
            />
          )}
        />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Switch>

     
    </div>
  );
}
