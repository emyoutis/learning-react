import React from 'react';
import TodoItem from "./TodoItem";


function TodoList() {
    const tasks = [
        {
            number: 1,
            text  : "Wash the dishes."
        },
        {
            number: 2,
            text  : "Wash the clothes."
        },
        {
            number: 3,
            text  : "Feed the dog."
        },
        {
            number: 4,
            text  : "Clean the room."
        },
    ];
    return (
        <div className="todo-list">
            <ol>
                {
                    tasks.map((task, key) => {
                            return <TodoItem text={task.text} key={key}/>
                        }
                    )
                }
            </ol>
        </div>
    );
}

export default TodoList;
