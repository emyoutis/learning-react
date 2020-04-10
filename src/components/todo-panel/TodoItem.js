import React from 'react';

function TodoItem(props) {
    const {text} = props;

    return (
        <li>
            <span>{text}</span>
            <div className="li-buttons" role="group">
                <button type="button" className="done" >✓</button>
                <span> </span>
                <button type="button" className="remove">Ｘ</button>
            </div>
        </li>
    );
}

export default TodoItem;
