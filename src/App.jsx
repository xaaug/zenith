import { useState } from "react";

import styles from "./styles/App.module.css";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskItem from "./components/TaskItem.jsx";
import Spinner from "./components/Spinner.jsx";

import { mock } from "../mock.js";
import { getTasks } from "../ai.js";

const App = () => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);

  const generateTasks = async (projectDetails) => {
    setLoading(true);

    const tasksArray = await getTasks(projectDetails);
    console.log(tasksArray);

    setLoading(false);

    setProject(JSON.parse(tasksArray).tasks);
    // setProject(mock.tasks);
  };

  const toggleComplete = (id) => {
    setProject((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    console.log(project);
  };

  const deleteTask = (id) => {
    setProject((prev) => prev.filter((task) => task.id !== id));

    console.log(project);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        {Object.entries(project).length === 0 && !loading ? (
          <Form generateTasks={generateTasks} />
        ) : null}

        {loading && (
          <div className={styles.loader}>
            <Spinner />
          </div>
        )}

        {Object.entries(project).length > 0 ? (
          <section className={styles.tasksContainer}>
            <h3>Tasks</h3>
            {project.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                  toggleState={toggleComplete}
                  deleteTask={deleteTask}
                />
              );
            })}
          </section>
        ) : null}
      </main>
    </>
  );
};

export default App;
