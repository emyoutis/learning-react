import React, {useState} from 'react';
import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import './task-panel.css';
import uuid from 'react-uuid';

function TodoPanel() {
    const [tasks, setTasks] = useState([]);

    const addTask = function (taskText) {
        const task = {
            text: taskText,
            id  : uuid(),
            done: false,
        };
        setTasks(tasks => tasks.concat(task));
    }


    const toggleDoneTask = function (id) {
        setTasks(tasks => {
            return tasks.map(task => {
                if (task.id === id) {
                    task.done = !task.done;
                }
                return task;
            });
        })
    }


    const deleteTask = function (id) {
        setTasks(tasks => tasks.filter(task => (task.id !== id)));
    }

    return <div className="task-panel">
        <TaskForm addTask={addTask}/>
        <TodoList tasks={tasks} deleteTask={deleteTask} toggleDoneTask={toggleDoneTask}/>
    </div>;
}

export default TodoPanel;
