import React from "react";
import "../src/Styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

// PAGES
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";
import Search from "./pages/SearchScreen/search";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchData } from "./api/googleSearch";
// import addNote from "./pages/Saved/addNote/addNote";

export default function App(props) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    console.log(data);
    setGoogleData(data);
    history.push("/search");
  };
  return (
    <div className="App">
      {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/home"
          component={() => <Home setSearch={setSearch} />}
        />
        <Route
          exact
          path="/search"
          component={() => (
            <Search  searchTerm={searchTerm} googleData={googleData} />
          )}
        />
        <Route exact path="/saved" component={Saved} />
        {/* <Route exact path="/saved/add-note" component={addNote} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
