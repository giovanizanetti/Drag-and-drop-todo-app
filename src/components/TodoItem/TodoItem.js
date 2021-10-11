import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const TodoItem = ({ todo, handleCompleted, handleDelete }) => {
  const [showDescription, setShowDescription] = useState(false)
  const label = todo.completed ? <del title='completed'>{todo.name}</del> : todo.name

  return (
    <li
      title='todo'
      className='pointer list-unstyled d-flex justify-content-between'
      onMouseLeave={() => setShowDescription(!showDescription)}
      onMouseEnter={() => setShowDescription(!showDescription)}
    >
      <Form.Check
        inline
        label={label}
        type='checkbox'
        id={todo.id}
        checked={todo.completed}
        onChange={() => handleCompleted(todo.id)}
      />
      <div className='pointer w-auto'>
        <FaTrashAlt title='delete-todo' onClick={() => handleDelete(todo.id)} color='red' />
      </div>
    </li>
  )
}
export default TodoItem
