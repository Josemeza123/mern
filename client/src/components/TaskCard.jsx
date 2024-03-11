import { useTask } from "../context/TaskContext";
import {useNavigate} from 'react-router-dom'

const TaskCard = ({ task }) => {
  const { deleteTask } = useTask();

  const navigate=useNavigate()

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.descripcion}</p>
      <span>{task.done == 1 ? "✔" : "✖"}</span>
      <span>{task.createAt}</span>
      <button onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
