import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "./list";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const addItem = () => {
    setNewItem(() => {
      return [...newitem, item];
    });
    setItem("");
  };
  const delItem = (ide) => {
    setNewItem((prevVal) => {
      return prevVal.filter((arrElem, index) => {
        return index !== ide;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Item"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={addItem}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return (
                <List text={val} key={index} id={index} onSelect={delItem} />
              );
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
