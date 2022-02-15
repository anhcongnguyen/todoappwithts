import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemove: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemove} className={classes.item} key={props.id}>
      {props.text}
    </li>
  );
};

export default TodoItem;
