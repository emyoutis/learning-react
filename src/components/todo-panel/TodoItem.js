import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faHourglassHalf} from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    const {task, toggleDoneTask, deleteTask} = props;
    const {text, done, id}                   = task;

    return (
        <li className={done ? "pending" : "done"}>
            <span>{text}</span>
            <div className="li-buttons " role="group">
                <button
                    type="button"
                    className="done"
                    title={done ? "Mark as pending." : "Mark as done."}
                    onClick={() => toggleDoneTask(id)}
                >
                    {
                        done
                            ? <FontAwesomeIcon icon={faHourglassHalf}/>
                            : <FontAwesomeIcon icon={faCheck}/>
                    }
                </button>
                <span> </span>
                <button type="button" className="remove" onClick={() => deleteTask(id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
