import React from "react";
import { Container } from "@material-ui/core";
import BoxSection from "../components/box-section";
import "../index.css";
import RadioButtonsGroup from "../components/radio-group";
import FileUpload from "../components/file-upload";
import FileDownload from "../components/file-download";
import PropTypes from "prop-types";
import axios from "axios";
const superagent = require('superagent')

class MainWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.getFormData = this.getFormData.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.displayFileDownload = this.displayFileDownload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getFormData() {
    return <RadioButtonsGroup />;
  }

  onSubmit(viewType, data){
      const req = superagent.post('http://localhost:3001/upload');
      req.attach("files", data[0]);
      req.end((err, res) => {
        if(err){
        console.log(err);
        }else {
          console.log(res);
          alert("files uploaded successfully");
        }
      });
}

  handleFileUpload() {
    return <FileUpload onSubmit = {this.onSubmit}/>;
  }

  displayFileDownload() {
    return <FileDownload />;
  }

  render() {
    const { heading } = this.props;
    return (
      <Container maxWidth="md">
        <div className="mainHeader">{heading}</div>
        <div className="boxWrapper">
          <BoxSection
            title="File Upload"
            getFormData={this.getFormData}
            isFileUpload={true}
            handleFileUpload = {this.handleFileUpload}
            onSubmit = {this.onSubmit}
          ></BoxSection>
        </div>

        <div className="boxWrapper">
          <BoxSection
            title="Files Download"
            getFormData={this.displayFileDownload}
            isFileUpload={false}
          ></BoxSection>
        </div>
      </Container>
    );
  }
}

MainWrapper.propTypes = {
    heading: PropTypes.string,
};
MainWrapper.defaultProps = {
  heading: "Admin Settings"
};

export default MainWrapper;
