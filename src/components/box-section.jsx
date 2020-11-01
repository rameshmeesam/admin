import React from "react";
import {
  AppBar,
  Grid,
  Container,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import "../index.css";

const BoxSection = (props) => {
  const { title, getFormData, isFileUpload, handleFileUpload } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Box boxShadow={2} bgcolor="background.paper" style={{ width: "100%" }}>
          <div className="boxHeader" position="static">
            <span>{title}</span>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid className="formData" item xs={6}>
                {getFormData()}
              </Grid>
              {isFileUpload && (
                <Grid item xs={6}>
                  {handleFileUpload()}
                </Grid>
              )}
            </Grid>
          </div>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default BoxSection;
