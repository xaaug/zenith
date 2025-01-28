import { useEffect, useState } from "react";

import styles from "./styles/App.module.css";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskItem from "./components/TaskItem.jsx";
import Spinner from "./components/Spinner.jsx";
import APIError from "./components/APIError.jsx";
import ProjectItem from "./components/ProjectItem.jsx";

import { mock } from "../mock.js";
import { getTasks } from "../ai.js";
import TasksContainer from "./components/TasksContainer.jsx";

const App = () => {
  const [project, setProject] = useState({});
  const [allProjects, setAllProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [allProjectsView, setAllProjectsView] = useState(false);
  const [homeView, setHomeView] = useState(true);
  const [singleProjectView, setSingleProjectView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [saveProjectText, setSaveProjectText] = useState("Save Project");
  const [projectTechStack, setProjectTechStack] = useState([]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }, [allProjects]);

  const generateTasks = async (projectDetails) => {
    setLoading(true);
    setHomeView(false);

    let tasksArray = await getTasks(projectDetails);

    try {
      JSON.parse(tasksArray[0]);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }

    setProjectTitle(tasksArray[1]);
    setProjectTechStack(tasksArray[2]);
    tasksArray = tasksArray[0];

    setLoading(false);

    setProject(JSON.parse(tasksArray).tasks);

    // setProjectTitle(mock[1]);
    // setProjectTechStack(mock[2])
    // setProject(mock[0]);
  };

  const handleSaveProject = () => {
    setAllProjects((prev) => [
      ...prev,
      { projectTitle, project, projectTechStack },
    ]);
    setSaveProjectText("Saved");
  };

  const toggleComplete = (id) => {
    setProject((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setProject((prev) => prev.filter((task) => task.id !== id));
  };

  const handleProjectsView = () => {
    setAllProjectsView((prev) => !prev);
    setHomeView(false);
    setAllProjectsView(true);
    setSingleProjectView(false);
  };

  const handleSingleProjectView = (id) => {
    const currentProject = allProjects[id];
    setProjectTitle(currentProject.projectTitle);
    setProjectTechStack(currentProject.projectTechStack);
    setProject(currentProject.project);
    setSingleProjectView(true);
    setHomeView(false);
    setAllProjectsView(false);
  };
  const handleHomeView = () => {
    setHomeView(true);
    setAllProjectsView(false);
    setSingleProjectView(false);
  };

  const clearStorage = () => localStorage.clear()

  return (
    <>
      <Header handleProjectsView={handleProjectsView} />
      {!allProjectsView ? (
        <main className={styles.container}>
          {homeView && (
            <div>
              {!error ? (
                <div>
                  {!loading ? <Form generateTasks={generateTasks} /> : null}
                </div>
              ) : (
                <APIError />
              )}

              {!loading && homeView ? (
                <div className={styles.projectContainer}>
                  <div className={styles.projectsContainer}>
                    <h3>Saved Projects</h3>
                    {Object.entries(allProjects).length === 0 ? (
                      <h3 style={{ fontSize: "1.2rem" }}>
                        You have no saved projects
                      </h3>
                    ) : (
                      <div className={styles.allProjectsHome}>
                        {allProjects.map((proj, i) => (
                          <ProjectItem
                            id={i}
                            handleSingleProjectView={handleSingleProjectView}
                            title={proj.projectTitle}
                            stack={proj.projectTechStack}
                            key={i}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {loading && (
            <div className={styles.loader}>
              <Spinner />
            </div>
          )}

          {Object.entries(project).length > 0 && !homeView && !loading ? (
            <TasksContainer
              handleSaveProject={handleSaveProject}
              handleHomeView={handleHomeView}
              saveProjectText={saveProjectText}
              project={project}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              projectTitle={projectTitle}
              home={true}
              handleProjectsView={handleProjectsView}
            />
          ) : null}
        </main>
      ) : (
        <main className={styles.allProjectsView}>
          {!singleProjectView && !homeView ? (
            <div>
              <button onClick={handleHomeView}>Home</button>
              <button style={{marginLeft: '.5rem'}} onClick={clearStorage}>Clear</button>
              <h3 className={styles.projectTitle}>All Projects</h3>
              <div className={styles.allProjectsContainer}>
                {allProjects.map((proj, i) => (
                  <ProjectItem
                    id={i}
                    handleSingleProjectView={handleSingleProjectView}
                    key={i}
                    title={proj.projectTitle}
                    stack={proj.projectTechStack}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <TasksContainer
                handleSaveProject={handleSaveProject}
                handleHomeView={handleHomeView}
                saveProjectText={saveProjectText}
                project={project}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                projectTitle={projectTitle}
                home={false}
                handleProjectsView={handleProjectsView}
              />
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default App;
