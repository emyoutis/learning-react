import React from 'react';
import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import './task-panel.css';
import './todo-list.css'

function TodoPanel() {
    return <div className="task-panel">
        <TaskForm/>
        <TodoList/>
    </div>;
}

export default TodoPanel;
