import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Data from "./searchData/Data";
import SearchPage from "./SearchPage";
import { SearchApi } from "../../redux/actions";
import { Redirect, useLocation } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import SearchNav from "./searchNav";
import SearchData from "./searchData/searchData";
import { connect } from "react-redux";
function SearchPageData({ loading, error, unauthorized, SearchApi }) {
  const dispatch = useDispatch();
  const dataFromAPI = useSelector((state) => state.reducer);

  const searchParams = new URLSearchParams(document.location.search);
  const [resultsObtained, setResultsObtained] = useState([]);
  const [resultsObtained1, setResultsObtained1] = useState([]);
  const [resultsObtained2, setResultsObtained2] = useState([]);
  const userid = localStorage.getItem("UserId");
  // console.log(userid);
  const searchTerm = searchParams.get("SearchTerm");
  const [resultsLoading,setResultsLoading]=useState(false)

  useEffect(() => {
    setResultsLoading(true);
    axios
      .post(
        "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/findrelevantdocument",
        { SearchTerm: searchTerm, UserId: userid }
      )
      .then((response) => {
        if (response.status == 200) {
          setResultsLoading(false);
          const SearchResults = response.data.response[0];
          setResultsObtained(SearchResults);
          const SearchResults1 = response.data.response[1];
          setResultsObtained1(SearchResults1);
          const SearchResults2 = response.data.response[2];
          setResultsObtained2(SearchResults2);
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
        <>
          <SearchNav />
          
          <div className="SearchPage">
            <div>
              {resultsObtained ? (
                resultsObtained.map((item, index) => (
                  <Data data={item} key={index} />
                ))
              ) : (
                <div className="No-SearchResults">
                  <h3>Sorry there are no results </h3>
                </div>
              )}
              {resultsObtained1 ? (
                resultsObtained1.map((item, index) => (
                  <Data data={item} key={index} />
                ))
              ) : (
                <div className="No-SearchResults">
                  <h3>Sorry there are no results </h3>
                </div>
              )}
              {resultsObtained2 ? (
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
const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = {
  SearchApi,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPageData);
