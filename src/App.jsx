import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskItem from './components/TaskItem.jsx'
import styles from "./styles/App.module.css";

import { getTasks } from "../ai.js";

const App = () => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);

  const generateTasks = async (projectDetails) => {
    setLoading(true);
    const tasksArray = await getTasks(projectDetails);
    setLoading(false);
    console.table(JSON.parse(tasksArray).tasks);
    setProject(JSON.parse(tasksArray));
  };


  return (
    <>
      <Header />
      <main className={styles.container}>
        <Form generateTasks={generateTasks} />
        {loading && <p>Loading...</p>}
        {/* {project ? <h1>{project.tasks[1].description}</h1> : null} */}
        <TaskItem />
      </main>
    </>
  );
};

export default App;
