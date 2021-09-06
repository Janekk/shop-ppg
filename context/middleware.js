import { types } from "./actions";
import axios from "./axios";
import settings from "../config/settings";

export const applyMiddleware = (dispatch) => async (action) => {
  dispatch({ type: types.FETCHING });
  try {
    switch (action.type) {
      case types.TEST:
        const response = await axios.get(`${settings.apiURL}/users`);
        dispatch({ type: types.TEST_SUCCESS, payload: response.data });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({ type: types.ERROR, errors: error.response.data });
    } else {
      console.log(error);
    }
  }
};
