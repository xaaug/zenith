import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({todo}) => {
    const [complete, setComplete] = useState(false)

    const handleClick = () => setComplete(prev => !prev)

    return (<>
    <div className={!complete ? styles.todoContainer : ` ${styles.todoContainer} ${styles.completed}`}>
        <button onClick={handleClick}></button>
        <p>{todo}</p>
    </div>
    </>)
}

TodoItem.propTypes = {
    todo: PropTypes.string
}

export default TodoItem