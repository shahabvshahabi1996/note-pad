import React from "react";
import Styles from "./style.input";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";

const Input = () => {
  const classes = Styles();
  return (
    <div className={classes.InputContainer}>
      <SearchIcon className={classes.InputIcon} />
      <input
        placeholder="Find what you looking for"
        className={classes.Input}
      />
    </div>
  );
};

Input.propTypes = {
  Icon: PropTypes.object
};

export default Input;
