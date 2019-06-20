import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  isLoading: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "You have encountered an error"
      };

    default:
      return state;
  }
};
