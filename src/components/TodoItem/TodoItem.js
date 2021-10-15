import { Form, Accordion } from 'react-bootstrap'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useState } from 'react'

import TodoDetails from '../TodoDetails/TodoDetails'

const TodoItem = ({ todo, handleCompleted, handleDelete, handleUpdate }) => {
  const [show, setShow] = useState(false)

  const label = todo.completed ? <del title='completed'>{todo.name}</del> : todo.name

  return (
    <Accordion.Item eventKey={todo.id}>
      <Accordion.Header className='p-0' onClick={() => setShow(!show)}>
        <div title='todo' className='d-flex justify-content-between w-100'>
          <Form.Check
            onClick={(e) => {
              e.stopPropagation()
            }}
            inline
            label={label}
            type='checkbox'
            id={todo.id}
            checked={todo.completed}
            onChange={(e) => handleUpdate(e, todo.id, 'completed')}
          />
          <div className='pointer w-auto px-2 min-width-30 d-flex flex-end-center-align'>
            <FaEdit className='mx-1 h-100' title='show-todo-details' />
            <FaTrashAlt className='ml-1 h-100' title='delete-todo' onClick={() => handleDelete(todo.id)} color='red' />
          </div>
        </div>
      </Accordion.Header>
      {show && <TodoDetails todo={todo} handleUpdate={handleUpdate} />}
    </Accordion.Item>
  )
}
export default TodoItem
