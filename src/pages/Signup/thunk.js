

// thunk.js
import axios from 'axios';
import { postDataRequest, postDataSuccess, postDataFailure,postDataUnauthorized } from './actions';
import {API_Address} from "../../shared/constants"
export const SignupAPI = (Email,PasswordConfirm,Name,MobileNumber) => {
  const API={API_Address}.API_Address
  return (dispatch) => {
    dispatch(postDataRequest());

    axios
      .post(API+'userregister', {Email,PasswordConfirm,Name,MobileNumber})
      .then((response) => {
        if (response.status === 200) {
          dispatch(postDataSuccess(response.data));
          alert("User has been registerd successfully");
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









