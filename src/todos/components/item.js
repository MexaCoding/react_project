import React from "react";
import Checkbox from "./checkbox.js";
import PropTypes from "prop-types";

const Item = ({ item, onChangeState, onDelete }) => {
  const { id, title, isCompleted } = (item || {});
  const checkboxId = `checkbox-item-${id}`;

  const handleChange = (e) => onChangeState(id, e.target.checked);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(id);
    }
  };

  return (
    <li key={id} className="list-group-item">
      <div className="row py-3">
        <div className="col-9">
          <Checkbox
            id={checkboxId}
            label={title}
            checked={isCompleted}
            onChange={handleChange} />
        </div>
        <div className="col-3 pull-right">
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={handleDelete}>X</button>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }),
  onChangeState: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Item;