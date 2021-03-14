import React from 'react'

export default function Todo( { todo, toggleTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id);
    }

    {/* Output of the task and checkbox */}
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                {todo.name}
            </label>
        </div>
    )
}
