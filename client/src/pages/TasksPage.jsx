import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskContext";

const TasksPage = () => {
  const { tasks ,loadTask} = useTask();

  useEffect(() => {    
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      {renderMain()}
    </>
  );
};

export default TasksPage;
