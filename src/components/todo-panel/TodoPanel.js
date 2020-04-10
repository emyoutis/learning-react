import React from 'react';
import TaskForm from "./TaskForm";
import './task-panel.css';

function TodoPanel() {
    return <div className="task-panel">
        <TaskForm/>
    </div>;
}

export default TodoPanel;
