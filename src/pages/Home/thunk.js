

// thunk.js
import React, { useState, useEffect } from 'react';
import SearchPage from "../SearchScreen/search";
import axios from 'axios';
import { postDataRequest, postDataSuccess, postDataFailure,postDataUnauthorized } from '../../redux/actions';
import {API_Address} from "../../shared/constants"
export const SearchAPI = ( SearchTerm ,UserId) => {

  const API={API_Address}.API_Address


  return(dispatch) => {
    console.log(SearchTerm ,UserId)
    dispatch(postDataRequest());
    axios
      .post(API+'findrelevantdocument', { SearchTerm ,UserId})
      .then((response) => {
        
          
        if (response.status === 200) {
            
          dispatch(postDataSuccess(response.data));
          const data=response.data;
          console.log(data)
    
          
        } else if (response.status === 401) {
          dispatch(postDataUnauthorized());
        } else {
          dispatch(postDataFailure(response.data.error));
        }
      })
      .catch((error) => {
        dispatch(postDataFailure(error.message));
      });
  };
};









;





