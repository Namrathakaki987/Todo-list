import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { TodoWrapper } from './TodoWrapper'
// ()=>toggleComplete(task.id)
export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => { console.log('Task ID:', task.id); toggleComplete(task.id); }} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon className="font-awesome" icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
                <FontAwesomeIcon className="font-awesome" icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
            </div>
            
        </div>
    )
}
