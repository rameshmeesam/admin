import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { FILE_UPLOAD_TEXT } from "../constants";
import { Button } from "@material-ui/core";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
      const {files} = this.state;
      const isDisabled = !files.length > 0 ? true : false;
    return (
      <div>
        <DropzoneArea
          onChange={this.handleChange.bind(this)}
          dropzoneText={FILE_UPLOAD_TEXT}
          showPreviewsInDropzone={false}
          showFileNames={true}
        />
        <Button className="uploadButton" disabled = {isDisabled} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

export default FileUpload;
