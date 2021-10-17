import { Form, Accordion, Card } from 'react-bootstrap'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import TodoDetails from '../TodoDetails/TodoDetails'
import CustomAccordionToggle from './CustomAccordionToggle'

const TodoItem = ({ todo, handleCompleted, handleDelete, handleUpdate, provided }) => {
  const { innerRef, draggableProps, dragHandleProps } = provided || {}
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [show])

  const label = todo.completed ? <del title='completed'>{todo.name}</del> : todo.name

  return (
    <Card ref={innerRef} {...draggableProps} {...dragHandleProps}>
      <Card.Header>
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
          <div className='pointer w-auto px-2 d-flex flex-end-center-align'>
            <CustomAccordionToggle handleShow={() => setShow(!show)} eventKey={todo.id}>
              <FaEdit className='h-100 mb-1 mx-1' title='show-todo-details' />
            </CustomAccordionToggle>

            <FaTrashAlt className='ml-1 h-100' title='delete-todo' onClick={() => handleDelete(todo.id)} color='red' />
          </div>
        </div>
      </Card.Header>
      {
        <Accordion.Collapse eventKey={todo.id}>
          <Card.Body>
            <TodoDetails show={show} todo={todo} handleUpdate={handleUpdate} />
          </Card.Body>
        </Accordion.Collapse>
      }
    </Card>
  )
}
export default TodoItem
