import React from "react";
import { TextField, InputLabel } from "@material-ui/core";

export default class AppTimeLineForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formWrapper">
          <span className="inputLabel">
            <label>Pillar Lead Directs</label>
          </span>
          <span className="inputText">
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="19/08/2020"
              max="19/08/2020"
              onChange= {this.handleChange}
            />
          </span>
        </div>
        <div className="formWrapper">
          <span className="inputLabel">
            <label>Pillar Lead</label>
          </span>
          <span className="pillarLead">
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="19/08/2020"
              max="19/08/2020"
              onChange= {this.handleChange}
            />
          </span>
        </div>
        <div className="formWrapper">
          <span className="inputLabel">
            <label>HRBP</label>
          </span>
          <span className="HRBP">
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="19/08/2020"
              max="19/08/2020"
              onChange= {this.handleChange}
            />
          </span>
        </div>
        <div className="formWrapper">
          <span className="inputLabel">
            <label>HRBP Director</label>
          </span>
          <span className="hrbpDirector">
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="19/08/2020"
              max="19/08/2020"
              onChange= {this.handleChange}
            />
          </span>
        </div>
      </form>
    );
  }
}
