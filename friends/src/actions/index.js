import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      console.log(err);
    });
};
