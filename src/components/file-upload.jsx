import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { FILE_UPLOAD_TEXT } from "../constants";
import { Button } from "@material-ui/core";
import { uploadFiles }  from "../actions";
import { connect } from 'react-redux';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
      const {uploadFiles} = this.props;
    this.setState({
      files: files,
    });
    uploadFiles(files)
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      files: state.files
    }
  }
  
  const mapDispatchToProps = { uploadFiles }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FileUpload)
