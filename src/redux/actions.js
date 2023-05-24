
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_Address} from "../shared/constants" ;
import axios from "axios"
export const SearchApi = createAsyncThunk("searchResultsR",async(SearchTerm)=>{
  console.log(SearchTerm);
  const UserId=localStorage.getItem("UserId")
  const API={API_Address}.API_Address;
  const response = await axios
      .post(API+'findrelevantdocument', { SearchTerm ,UserId})
      console.log(response.data.response)
      return response.json();
})


const actionsToDo=createSlice({
  name:"SearchAPi",
  initialState:{
    isLoading:false,
    data:null,
  },
  extraReducers:(builder)=>{
    builder.addCase(SearchApi.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.data=action.payload;
    });
    builder.addCase(SearchApi.pending,(state,action)=>{
    state.isLoading=true;
    });
    builder.addCase(SearchApi.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.data=action.payload;
    });
    // builder.addCase(SearchApi.rejected,(state,action)=>{
    // console.log("Error",action.payload)
    // state.isError=true;
    // });e
  }
})

export const postDataRequest = () => ({
  type: 'POST_DATA_REQUEST',
});

export const postDataSuccess = (data) => ({
  type: 'POST_DATA_SUCCESS',
  payload: data,
});

export const postDataFailure = (error) => ({
  type: 'POST_DATA_FAILURE',
  payload: error,
});
export const postDataUnauthorized = () => ({
  type: 'POST_DATA_UNAUTHORIZED',
});
