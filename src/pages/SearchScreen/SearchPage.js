import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchPage.css";
import "./SearchData.css";
import Navbar from "react-bootstrap/Navbar";
// import Searchbar from "../../components/Searchbar"
import * as BsIcons from "react-icons/bs";
import "../../components/Searchbar.css";
import SearchData from "./searchData/searchData";

const SearchScreen = ({ resultsObtained }) => {
  const history = useHistory("");
    const [userid, setUserId] = useState("");
  
  // useEffect(() => {
  //   if (searchTerm === "") {
  //     history.push("/home");
  //   }
  //   //eslint-disable-next-line
  // }, [searchTerm]);
  useEffect(() => {
    if (!localStorage.getItem("UserId")) {
      history.push("/");
    }
    const id = localStorage.getItem("UserId");
    console.log(resultsObtained);
    setUserId(id);
  }, []);
  const [term, setTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      // setSearch(term.toLocaleLowerCase(),userid);
    }
  };
  return (
    <>
      <Navbar className="navbar-search" bg="light" expand="lg" >
        <img
          className="Logo-Home"
          src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          alt="Logo"
        />
        <p className="Library-mobile Library">Library Search</p>

        <form className="d-flex" id="Search" onSubmit={handleSubmit}>
          <div className="Search">
            
            <input
              placeholder="Search"
              type="text"
              value={term}
              aria-label="Search"
              // onClick={handleClick}
              onChange={(event) => setTerm(event.target.value)}
            ></input>
            <p id="Search-Logo">
              <BsIcons.BsSearch />
            </p>
          </div>
        </form>
      </Navbar>
      <div className="SearchPage">
        
        <SearchData resultsObtained={resultsObtained}/>
      </div>
    </>
  );
};
export default SearchScreen;


//  <Navbar className="navbar-search" bg="light" expand="lg" onSubmit={handleSubmit}>
//         <img
//           className="Logo-Home"
//           src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
//           alt="Logo"
//         />
//         <p className="Library-mobile Library">Library Search</p>

//         <form className="d-flex" id="Search" onSubmit={handleSubmit}>
//           <div className="Search">
            
//             <input
//               placeholder="Search"
//               type="text"
//               value={term}
//               aria-label="Search"
//               // onClick={handleClick}
//               onChange={(event) => setTerm(event.target.value)}
//             ></input>
//             <p id="Search-Logo">
//               <BsIcons.BsSearch />
//             </p>
//             <div className="dropdown">
//               {searchHistory
//                 .filter((item) => {
//                   const searchTerm = term;
//                   const searchList = item;
//                   // console.log(searchList)
//                   return searchTerm && searchList ;
//                 })
//                 .slice(0, 5)
//                 .map((item) => (
//                   <div
//                     onClick={() => setTerm(item)}
//                     className="dropdown-row"
//                     key={item}
//                     onDoubleClick={handleSubmit}
//                   >
//                     {item}
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </form>
//       </Navbar>