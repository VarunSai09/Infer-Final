

// thunk.js
import axios from 'axios';
import { postDataRequest, postDataSuccess, postDataFailure,postDataUnauthorized } from '../../redux/actions';
import {API_Address} from "../../shared/constants"
export const UpdateUserAPI = ( Name,
       Email,
       MobileNo,
       UserId) => {
  const API={API_Address}.API_Address
  console.log(API)
  return(dispatch) => {
    console.log(Email, Name, MobileNo,UserId)
    dispatch(postDataRequest());
    axios
      .post(API+'updateuserdetails', { Name,Email,MobileNo,UserId})
      .then((response) => {
          console.log(response)
        if (response.status === 200) {
          dispatch(postDataSuccess(response.data));
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









