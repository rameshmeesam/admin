import React from "react";
import {
  Grid,
  Box
} from "@material-ui/core";
import "../index.css";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class BoxSection extends React.Component {
  render() {
    const { title, getFormData, isFileUpload, handleFileUpload, files} = this.props;
    console.info(`Upload Files Info ${JSON.stringify(files)}`);
    return (
      <React.Fragment>
        <Grid container>
          <Box
            boxShadow={2}
            bgcolor="background.paper"
            style={{ width: "100%" }}
          >
            <div className="boxHeader" position="static">
              <span>{title}</span>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid className="formData" item xs={isFileUpload ? 6 : 7}>
                  {getFormData()}
                </Grid>
                {isFileUpload && (
                  <Grid item xs={5}>
                    {handleFileUpload()}
                  </Grid>
                )}
              </Grid>
            </div>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
}

BoxSection.propTypes = {
    title: PropTypes.string,
    getFormData: PropTypes.func,
    isFileUpload: PropTypes.bool,
    handleFileUpload: PropTypes.func,
    files: PropTypes.array,
    onSubmit: PropTypes.func

};
BoxSection.defaultProps = {
    title: "",
    getFormData: ()=> {},
    isFileUpload: false,
    handleFileUpload: ()=> {},
    files: ()=> {},
    onSubmit: ()=> {}
};


const mapStateToProps = (state) => {
    return {
      files: state.files,
      formData: state.files,
    }
  }
  
  const mapDispatchToProps = {};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoxSection)
