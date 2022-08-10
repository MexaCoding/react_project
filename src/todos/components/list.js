import React from "react";
import Item from "./item";
import PropTypes from "prop-types";

const List = ({ className, title, items, emptyMessage, onChangeState, onDelete }) => {
  items ||= [];
  const classNames = `list-group p-1 ${className}`;

  return (
    <div className='col-6'>
      <h2>{title}</h2>

      {items.length == 0 && emptyMessage && (
        <label>{emptyMessage}</label>
      )}

      <ul className={classNames}>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onChangeState={onChangeState}
            onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string,
  className: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onChangeState: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default List;