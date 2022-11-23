import { ActionTypes } from "../actions/action-types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const photoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.PHOTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case ActionTypes.PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
