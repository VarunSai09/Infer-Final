// reducer.js
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'POST_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'POST_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
      case 'POST_DATA_UNAUTHORIZED':
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
        unauthorized: true,
      };
    default:
      return state;
  }
};

export default reducer;

