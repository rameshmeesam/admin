import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Link from '@material-ui/core/Link';
import { setFileType } from "../actions";
import { connect } from "react-redux";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class RadioButtonsGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { setFileType, fileType } = this.props;
    setFileType(event.target.value);
    console.log(`get fileType from store ${fileType}`);
  }
  render() {
    const { fileType } = this.props;
    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="file"
          name="file1"
          value={fileType}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="Associate File"
            control={<Radio />}
            label={
              <>
              <span className="downloadArrowButton">
                Eligible Associate File <ArrowDownwardIcon className="downloadArrowButton"/></span>{" "}
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Template
                </Link>
              </>
            }
          />
          <FormControlLabel
            value="delta File"
            control={<Radio />}
            label={
              <>
              <span className="downloadArrowButton">
                Eligible Associate File <ArrowDownwardIcon className="downloadArrowButton"/></span>{" "}
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Template
                </Link>
              </>
            }
          />
          <FormControlLabel
            value="midPoint File"
            control={<Radio />}
            label={
              <>
              <span className="downloadArrowButton">
                Eligible Associate File <ArrowDownwardIcon className="downloadArrowButton"/></span>{" "}
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Template
                </Link>
              </>
            }
          />
          <FormControlLabel
            value="budget File"
            control={<Radio />}
            label={
              <>
              <span className="downloadArrowButton">
                Eligible Associate File <ArrowDownwardIcon className="downloadArrowButton"/></span>{" "}
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Template
                </Link>
              </>
            }
          />
        </RadioGroup>
      </FormControl>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fileType: state.fileType,
  };
};
const mapDispatchToProps = { setFileType };

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonsGroup);
