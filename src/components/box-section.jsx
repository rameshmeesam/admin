import React from "react";
import {
  Button,
  Grid,
  Container,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import "../index.css";

class BoxSection extends React.Component {
  render() {
    const { title, getFormData, isFileUpload, handleFileUpload } = this.props;
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

export default BoxSection;
