import React from 'react';
import { reduce, todos } from '../reducers/Reducer';
import { useReducer } from '../reducers/Reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, todos)
     
    return (
        <div className='todo-form'>
            <form>
                <input type='text' OnChange={dispatch} />
            </form>
        </div>
    )
}

export default TodoForm;