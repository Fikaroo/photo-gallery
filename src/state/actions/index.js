import axios from "axios";
import { ActionTypes } from "./action-types";

export const getData = (limit) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.PHOTO_LOADING,
      });
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=3&limit=${limit}`
      );
      setTimeout(
        () =>
          dispatch({
            type: ActionTypes.PHOTO_SUCCESS,
            payload: data,
          }),
        3000
      );
    } catch (error) {
      dispatch({
        type: ActionTypes.PHOTO_ERROR,
        payload: error,
      });
    }
  };
};
