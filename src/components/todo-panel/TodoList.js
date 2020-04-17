import React, {useState} from 'react';
import TodoItem from "./TodoItem";


function TodoList(props) {
    const tasks = props.tasks;

    return (
        <div className="todo-list">
            {tasks.length
                ? <ol>
                    {
                        tasks.map((task) => {
                                return <TodoItem text={task.text} key={task.id}/>
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
