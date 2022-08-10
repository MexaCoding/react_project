import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addItem }) => {
  const [title, setTitle] = useState("");

  const isDisabled = !!(title === null || title.trim() === "");
  const onChangeTitle = e => setTitle(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    addItem({
      id: (+new Date()).toString(),
      title,
      isCompleted: false,
    });
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} className="row mt-4">
      <div className="col-9">
        <input
          className="form-control"
          type="text"
          name="item-title"
          placeholder="Add a to-do"
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className="col">
        <input
          className="btn btn-primary"
          type="submit"
          disabled={isDisabled}
          value="Add" />
      </div>
    </form>
  );
};

Form.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default Form;