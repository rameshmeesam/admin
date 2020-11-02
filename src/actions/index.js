const ACTIONS = {
    FILE_UPLOAD: "FILE_UPLOAD",
    SET_FILE_TYPE: "SET_FILE_TYPE"
  };
  
  export const uploadFiles = files => {
    return {
      type: ACTIONS.FILE_UPLOAD,
      files
    };
  };

  export const setFileType = fileType => {
    return {
      type: ACTIONS.SET_FILE_TYPE,
      fileType
    };
  };
    
  export default ACTIONS;
  