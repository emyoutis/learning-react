import React from 'react';
import TodoItem from "./TodoItem";
import './todo-list.css';


function TodoList(props) {
    const {tasks, toggleDoneTask, deleteTask} = props;

    return (
        <div className="todo-list">
            {tasks.length
                ? <ol>
                    {
                        tasks.map((task) => {
                                return <TodoItem
                                    task={task}
                                    deleteTask={deleteTask}
                                    toggleDoneTask={toggleDoneTask}
                                    key={task.id}/>
                            }
                        )
                    }
                </ol>
                : <div className="empty-message">Tasks list is empty!</div>
            }
        </div>
    );
}

export default TodoList;
