import React from "react";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "../index.css";
import axios from "axios";

export default class FileDownload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesData: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    axios
      .get("http://localhost:3000/files")
      .then((res) => {
       // console.log("got some responce" + res.data);
        alert(JSON.stringify(res.data));
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log("got error responce" + err.message);
      });
  }
  render() {
    return (
      <div>
        <span className="chipPadding">
          <Chip
            icon={<ArrowDownwardIcon />}
            label="ASSOCIATE DATA"
            onClick={this.handleClick}
            variant="outlined"
          />
        </span>
        <span className="chipPadding">
          <Chip
            icon={<ArrowDownwardIcon />}
            label="MID-POINT DATA"
            onClick={this.handleClick}
            variant="outlined"
          />
        </span>
        <span className="chipPadding">
          <Chip
            icon={<ArrowDownwardIcon />}
            label="BUDGET DATA"
            onClick={this.handleClick}
            variant="outlined"
          />
        </span>
      </div>
    );
  }
}
