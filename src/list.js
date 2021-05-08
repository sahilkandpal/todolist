import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeletIcon from "@material-ui/icons/Delete";

const List = (props) => {
  const [line, setLine] = useState(false);
  const delItem = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <span>
        <Button
          className="delBtn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeletIcon className="delIcon" />
        </Button>
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default List;
