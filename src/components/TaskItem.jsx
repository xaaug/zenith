import Chip from './Chip'
import styles from '../styles/TaskItem.module.css'

const TaskItem = () => {
    return (
        <div className={styles.container}>
            <h3>Setup Development Environment</h3>
            <p>Peform manual and automated testing of the ecommerce website</p>
            <div className={styles.chipsContainer}>
                <Chip title='React' />
                <Chip title='React' />
                <Chip title='React' />
            </div>
            <div className={styles.estimatedTime}>EST: 60 min</div>
            <button>Mark Complete</button>
        </div>
    )
}

export default TaskItem