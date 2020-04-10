import React from 'react';
import TaskInput from "./TaskInput";
import './task-form.css'
import TaskButton from "./TaskButton";

function TaskForm() {
    return (
        <form className="task-form">
            <div>
                <h2>Add Task:</h2>
                <TaskInput/>
                <TaskButton/>
            </div>
        </form>
    );
}

export default TaskForm;
