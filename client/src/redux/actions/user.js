import axios from "axios";
import { server } from "../../server";
import * as actionTypes from "./userActionTypes"; // Import action types

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOAD_USER_REQUEST, // Use imported action types
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: actionTypes.LOAD_USER_SUCCESS, // Use imported action types
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_USER_FAIL, // Use imported action types
      payload: error.response.data.message,
    });
  }
};
