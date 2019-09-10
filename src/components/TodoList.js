import React, { useReducer } from 'react';
import { reducer, todos } from '../reducers/Reducer';



const TodoList  = () => {
    const [state, dispatch] = useReducer(reducer, todos);
    console.log(state);
    return(
        <div className='todo-list'>
            <h1>Todo List</h1>
            <div>{state.map((todos) => {
                console.log(todos)
                return <div>{todos.item}</div>
            })}</div>
        </div>
    )
}

export default TodoList;