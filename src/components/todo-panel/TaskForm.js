import React, {useState} from 'react';
import './task-form.css'

function TaskForm(props) {
    const {addTask}       = props;
    const [text, setText] = useState('')

    const handleButtonClick = function (e) {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) {
            alert('Input is empty.')
        } else {
            addTask(trimmed);
        }
        
        setText('');
    }

    return (
        <form className="task-form">
            <div>
                <h2>Add Task:</h2>
                <div className="field">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="btn" onClick={handleButtonClick}>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
