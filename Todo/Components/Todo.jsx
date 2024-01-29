import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className= {`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div>
        <box-icon type='solid' name='edit-alt' color='#ffffff' onClick={() => editTodo(task.id)}></box-icon>
        <box-icon name='trash' type='solid' color='#ffffff' onClick={() => deleteTodo(task.id)}></box-icon>
      </div>
      </div>
  )
}
