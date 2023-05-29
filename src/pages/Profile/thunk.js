// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import axios from 'axios';

//Importing from pages
import { postDataRequest, postDataSuccess, postDataFailure,postDataUnauthorized } from '../../redux/actions';
import {API_Address} from "../../shared/constants"
export const UpdateUserAPI = ( Name,
       Email,
       MobileNo,
       UserId) => {
  const API={API_Address}.API_Address   //reteriving aPI link fro shared constnats
  console.log(API)
  return(dispatch) => {
    console.log(Email, Name, MobileNo,UserId)
    dispatch(postDataRequest());   //mcalling thee API
    axios
      .post(API+'updateuserdetails', { Name,Email,MobileNo,UserId})
      .then((response) => {
          console.log(response)
        if (response.status === 200) {
          dispatch(postDataSuccess(response.data)); //Dispatching the data to store
          window.location.reload()
          console.log(response.data)
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









