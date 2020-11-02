import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { setFileType }  from "../actions";
import { connect } from 'react-redux';

class RadioButtonsGroup extends React.Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event){
    const {setFileType, fileType} = this.props;
    setFileType(event.target.value);
    console.log(`get fileType from store ${fileType}`)
  };
render() {
    const {fileType} = this.props;
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
          label="Eligible Associate File"
        />
        <FormControlLabel
          value="delta File"
          control={<Radio />}
          label="Eligible Associate Delta File"
        />
        <FormControlLabel
          value="midPoint File"
          control={<Radio />}
          label="Mid-Point File"
        />
        <FormControlLabel
          value="budget File"
          control={<Radio />}
          label="Budget File"
        />
      </RadioGroup>
    </FormControl>
  );
}
}
const mapStateToProps = (state) => {
    return {
      fileType: state.fileType
    }
  }
  const mapDispatchToProps = {setFileType};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RadioButtonsGroup)
