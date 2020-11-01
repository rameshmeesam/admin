import React from "react";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "../index.css";

export default function FileDownload() {

  const handleClick = () => {
    console.info("You clicked");
  };

  return (
    <div>
      <span className="chipPadding">
        <Chip
          icon={<ArrowDownwardIcon />}
          label="ASSOCIATE DATA"
          onClick={handleClick}
          variant="outlined"
        />
      </span>
      <span className="chipPadding">
        <Chip
          icon={<ArrowDownwardIcon />}
          label="MID-POINT DATA"
          onClick={handleClick}
          variant="outlined"
        />
      </span>
      <span className="chipPadding">
        <Chip
          icon={<ArrowDownwardIcon />}
          label="BUDGET DATA"
          onClick={handleClick}
          variant="outlined"
        />
      </span>
    </div>
  );
}
