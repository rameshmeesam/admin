/* eslint-disable max-statements */
import ACTIONS from "../actions";

export const initialState = {
  files: [],
};

export const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.FILE_UPLOAD: {
      return {
        ...state,
        files: action.files
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;

