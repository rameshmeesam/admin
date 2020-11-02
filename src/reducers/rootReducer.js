/* eslint-disable max-statements */
import ACTIONS from "../actions";

export const initialState = {
  files: [],
  fileType: "Associate File"
};

export const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.FILE_UPLOAD: {
      return {
        ...state,
        files: action.files
      };
    }

    case ACTIONS.SET_FILE_TYPE: {
        return {
          ...state,
          fileType: action.fileType
        };
      }

    default: {
      return state;
    }
  }
};

export default rootReducer;

