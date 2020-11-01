import React, { Component } from "react";
import { Input, InputLabel } from "@material-ui/core";

const styles = {
  hidden: {
    display: "none",
  },
  importLabel: {
    color: "black",
  },
};

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
      alert("clicked on file upload");
  }
  render() {
    return (
      <div>
        <InputLabel htmlFor="import-button" style={styles.importLabel}>
          <Input
            id="import-button"
            inputProps={{
              accept:
                ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
            }}
            onChange={this.onInputChange}
            style={styles.hidden}
            type="file"
          />
          Import Spreadsheet
        </InputLabel>
      </div>
    );
  }
}

export default FileUpload;
