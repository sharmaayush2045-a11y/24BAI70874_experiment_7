function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      >
        {task.text}
      </span>

      <div className="buttons">
        <button onClick={toggleTask}>✔</button>
        <button onClick={deleteTask}>❌</button>
      </div>
    </div>
  );
}

export default TaskItem;