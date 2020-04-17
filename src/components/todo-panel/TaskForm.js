import React from 'react';
import './task-form.css'

function TaskForm() {
    return (
        <form className="task-form">
            <div>
                <h2>Add Task:</h2>
                <div className="field">
                    <input
                        type="text"
                        placeholder="Task Title"
                    />
                </div>
                <div className="btn">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
