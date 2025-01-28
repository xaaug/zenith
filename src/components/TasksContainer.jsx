import styles from '../styles/TasksContainer.module.css'

import TaskItem from './TaskItem';

const TasksContainer = ({handleSaveProject, handleHomeView, saveProjectText, project, deleteTask, toggleComplete, projectTitle, home, handleProjectsView}) => {
  return (
    <section className={styles.tasksContainer}>
      <div className={styles.btnContainer}>
        
      <button className={styles.homeBtn} style={{fontSize: '.9rem'}} onClick={handleHomeView}>Home</button>
                 <button className={styles.homeBtn}  style={{fontSize: '.9rem'}} onClick={handleProjectsView}>Projects</button>
      </div>
                 <h3 className={styles.projectTitle}>{projectTitle}</h3>
                 <div className={styles.taskSave}>
                   <p>Tasks</p>
                   {home && <button
                     className={styles.saveProjectBtn}
                     onClick={handleSaveProject}
                     disabled={saveProjectText === 'Saved' ? true : false}
                   >
                     {saveProjectText}
                   </button> }
                 </div>
   
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
  )
}

export default TasksContainer