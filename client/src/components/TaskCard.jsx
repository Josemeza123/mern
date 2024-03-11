import { useTask } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTask();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.descripcion}</p>
      <span>{task.done == 1 ? "✔" : "✖"}</span>
      <span>{task.createAt}</span>
      <button>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
