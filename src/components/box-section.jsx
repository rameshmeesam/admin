import React from "react";
import {
  Grid,
  Box
} from "@material-ui/core";
import "../index.css";
import { connect } from 'react-redux';

class BoxSection extends React.Component {
  render() {
    const { title, getFormData, isFileUpload, handleFileUpload, files } = this.props;
    console.info("hell0 RAM" + JSON.stringify(files));
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      files: state.files
    }
  }
  
  const mapDispatchToProps = {};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoxSection)
