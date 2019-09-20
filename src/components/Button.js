import React from "react";
import PropTypes from "prop-types";

const Button = props => <div className={props.className}></div>;

Button.prototype = {
  className: PropTypes.string
};

export default Button;
