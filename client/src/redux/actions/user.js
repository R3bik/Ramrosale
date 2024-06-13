import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    console.log("Dispatching LoadUserRequest");
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });

    console.log("User data loaded:", data.user);
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    console.error("Error loading user:", error.response.data);
    dispatch({
      type: "LoadUserFail",
      payload: error.response?.data?.message || "Failed to load user",
    });
  }
};
