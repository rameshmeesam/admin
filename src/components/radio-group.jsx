import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("file");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="file"
        name="file1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="file"
          control={<Radio />}
          label="Eligible Associate File"
        />
        <FormControlLabel
          value="deltaFile"
          control={<Radio />}
          label="Eligible Associate Delta File"
        />
        <FormControlLabel
          value="midPoint"
          control={<Radio />}
          label="Mid-Point File"
        />
        <FormControlLabel
          value="budgetFile"
          control={<Radio />}
          label="Budget File"
        />
      </RadioGroup>
    </FormControl>
  );
}
