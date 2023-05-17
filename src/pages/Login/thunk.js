

// thunk.js
import axios from 'axios';
import { postDataRequest, postDataSuccess, postDataFailure,postDataUnauthorized } from './actions';
import {API_Address} from "../../shared/constants"
export const LoginAPI = (Email,Password) => {
  const API={API_Address}.API_Address
  return (dispatch) => {
    dispatch(postDataRequest());

    axios
      .post(API+'signin', {Email,Password})
      .then((response) => {
        if (response.status === 200) {
          dispatch(postDataSuccess(response.data));
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










// import axios from 'axios';
// import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
// import {API_Address} from "../../shared/constants"

// export const LoginAPI = (email,password) => {
//     const API={API_Address}.API_Address
//   return (dispatch) => {
//     dispatch(fetchDataRequest());

//     axios
//       .post( API+"signin",
//         {
//           Email: email,
//           Password: password,
//         })
//       .then((response) => {
//         dispatch(fetchDataSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(fetchDataFailure(error.message));
//       });
//   };
// };
