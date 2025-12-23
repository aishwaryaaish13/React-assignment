import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const title = inputRef.current.value;
    if (!title) return;

    addTodo(title);
    inputRef.current.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Enter todo" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default AddTodo;
