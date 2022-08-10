import React, { useState } from "react";
import Form from "./components/form";
import List from "./components/list";
import './styles.scss'

const ToDos = () => {
  const [items, setItems] = useState([]);
  const todoList = items.filter(item => !item.isCompleted);
  const doneList = items.filter(item => item.isCompleted);

  const addItem = item => {
    setItems([...items, item]);
  };

  const onChangeState = (id, isCompleted) => {
    const updatedList = items.map(item => {
      if (item.id == id) {
        return { ...item, isCompleted: isCompleted }
      }

      return item;
    });
    setItems(updatedList);
  };

  const onDelete = (id) => {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  }

  return (
    <div className="container">
      <h1>Today</h1>
      <Form addItem={addItem} />
      <div className="row mt-4">
        <List
          className='todo-list'
          title="To-do"
          items={todoList}
          onChangeState={onChangeState}
          onDelete={onDelete} />

        <List
          className='completed-list'
          title='Completed'
          emptyMessage="Let's try to complete some to-dos!"
          items={doneList}
          onChangeState={onChangeState}
          onDelete={onDelete} />
      </div>
    </div>
  );
};

export default ToDos;