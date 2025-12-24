const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <h4>{todo.title}</h4>
      <p className={todo.completed ? "completed" : "pending"}>
        {todo.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TodoCard;
