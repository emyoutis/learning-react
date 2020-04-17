import React, {useState} from 'react';
import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import './task-panel.css';
import './todo-list.css';
import uuid from 'react-uuid';

function TodoPanel() {
    const [tasks, setTasks] = useState([]);

    const addTask = function (taskText) {
        const task = {
            text: taskText,
            id  : uuid()
        };
        setTasks(tasks => tasks.concat(task));
    }

    return <div className="task-panel">
        <TaskForm addTask={addTask}/>
        <TodoList tasks={tasks}/>
    </div>;
}

export default TodoPanel;
