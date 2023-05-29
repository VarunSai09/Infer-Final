// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing librarires and modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Redirect, useLocation } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";

//importing pages
import Data from "./searchData/Data";
import { SearchApi } from "../../redux/actions";
import SearchNav from "./searchNav";

function SearchPageData({ loading, error, unauthorized, SearchApi }) {
  // const dispatch = useDispatch();
  // const dataFromAPI = useSelector((state) => state.reducer);
  
  //Assigning values to constants using useState
  const searchParams = new URLSearchParams(document.location.search);
  const [resultsObtained, setResultsObtained] = useState([]);
  const [resultsObtained1, setResultsObtained1] = useState([]);
  const [resultsObtained2, setResultsObtained2] = useState([]);
  const userid = localStorage.getItem("UserId");
  const searchTerm = searchParams.get("SearchTerm");
  const [resultsLoading,setResultsLoading]=useState(false)

  //making an API call to find the relevant documnets
  useEffect(() => {   
    setResultsLoading(true);    //initiaite the loading spinnner
    axios
      .post(
        "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/findrelevantdocument",
        { SearchTerm: searchTerm, UserId: userid }
      )
      .then((response) => {
        if (response.status == 200) {
          setResultsLoading(false);   //Suspend the loading spinner
          const SearchResults = response.data.response[0];
          setResultsObtained(SearchResults); //response of array[0] from the API call is getting assigned to a constant
          const SearchResults1 = response.data.response[1];
          setResultsObtained1(SearchResults1); //response of array[1] from the API call is getting assigned to a constant
          const SearchResults2 = response.data.response[2];
          setResultsObtained2(SearchResults2);  ////response of array[2] from the API call is getting assigned to a constant
        }
      })
      .catch((response) => {
        if (response.satusCode == 500) {
          console.log(error);
        }
      });
  }, []);
  useEffect(() => {
    // console.log(resultsObtained);
  });

  return (
    <>
      
      {searchTerm !== "" ? (
        //checking if a search tem is present in url parameters
        <>
          <SearchNav />
          
          <div className="SearchPage">
            <div>
              {resultsObtained ? (
                //Checkingif results are present after an API call
                resultsObtained.map((item, index) => (
                  //Mapping the results obtained from array[0] to Data Component to sdisplat them in searchpage
                  <Data data={item} key={index} />
                ))
              ) : (
                //Displaying message if no SearchResults are present
                <div className="No-SearchResults">
                  <h3>Sorry there are no results </h3>
                </div>
              )}
              {resultsObtained1 ? (
                //Mapping the results obtained from array[1] to Data Component to sdisplat them in searchpage
                resultsObtained1.map((item, index) => (
                  <Data data={item} key={index} />
                ))
              ) : (
                <div className="No-SearchResults">
                  <h3>Sorry there are no results </h3>
                </div>
              )}
              {resultsObtained2 ? (
                //Mapping the results obtained from array[2] to Data Component to sdisplat them in searchpage
                resultsObtained2.map((item, index) => (
                  <Data data={item} key={index} />
                  
                ))
              ) : (
                <div className="No-SearchResults">
                  <h3>Sorry there are no results </h3>
                </div>
              )}
            </div>
            {resultsLoading && <BounceLoader color="#787e83" display="flex" size={70} id="spinner"  />
            }
          </div>
        </>
        
      ) : (
        <Redirect to={"/home"} />
      )}
    </>
    
  );
}
  
export default (SearchPageData);
