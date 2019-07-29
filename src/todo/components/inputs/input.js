import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { value, onChange, onKeyPress } = props;

  return <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} />;
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func
};

export default Input;
