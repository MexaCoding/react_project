import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, label, checked, onChange }) => {
  const classNames = `mt-1 checkbox form-check ${checked ? "checked" : ""}`;
  
  return (
    <div className={classNames}>
      <input
        className="form-check-input"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;