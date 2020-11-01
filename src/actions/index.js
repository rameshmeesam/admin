const ACTIONS = {
    FILE_UPLOAD: "FILE_UPLOAD",
  };
  
  export const uploadFiles = files => {
    return {
      type: ACTIONS.FILE_UPLOAD,
      files
    };
  };
    
  export default ACTIONS;
  