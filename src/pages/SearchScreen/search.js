import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import {useDispatch,useSelector} from "react-redux"

import SearchPage from "./SearchPage";
import { SearchAPI } from "../Home/thunk";
import { Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
function SearchPageData({ loading, error, unauthorized, SearchAPI }) {
   const dispatch=useDispatch();
  const dataFromAPI=useSelector(state=>state.reducer)

  const searchParams = new URLSearchParams(document.location.search);
  const [resultsObtained, setResultsObtained] = useState([]);
  const userid = localStorage.getItem("UserId");
  const searchTerm = searchParams.get("SearchTerm");

  useEffect( () => {
     SearchAPI(searchTerm, userid);
  }, []);



  return <>{searchTerm !== "" ? <SearchPage resultsObtained={resultsObtained} /> : <Redirect to={"/home"} />}</>;
}
const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = {
  SearchAPI,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPageData);
