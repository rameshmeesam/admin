import React from "react";
import { Container } from "@material-ui/core";
import BoxSection from "../components/box-section";
import "../index.css";
import RadioButtonsGroup from "../components/radio-group";
import FileUpload from "../components/file-upload";

class MainWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.getFormData = this.getFormData.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  getFormData() {
    return <RadioButtonsGroup />;
  }

  handleFileUpload() {
    return <FileUpload />;
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
          ></BoxSection>
        </div>
        <div className="boxWrapper">
          <BoxSection
            title="Application Timelines"
            getFormData={() => {}}
            isFileUpload={false}
            handleFileUpload = {()=>{}}
          ></BoxSection>
        </div>
        <div className="boxWrapper">
          <BoxSection
            title="Add/Remove Admin"
            getFormData={() => {}}
            isFileUpload={false}
            handleFileUpload = {()=>{}}
          ></BoxSection>
        </div>
        <div className="boxWrapper">
          <BoxSection
            title="Files Download"
            getFormData={() => {}}
            isFileUpload={false}
            handleFileUpload = {()=>{}}
          ></BoxSection>
        </div>
      </Container>
    );
  }
}

export default MainWrapper;
