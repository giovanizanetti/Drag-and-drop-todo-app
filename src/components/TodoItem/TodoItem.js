import { Form, Accordion, Card } from 'react-bootstrap'
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { GrTextAlignFull } from 'react-icons/gr'
import { COMPLETED } from '../../config/constants'

import TodoDetails from '../TodoDetails/TodoDetails'
import CustomAccordionToggle from '../CustomAccordionToggle'

const TodoItem = ({ todo, handleCompleted, handleDelete, handleUpdate, provided }) => {
  const { innerRef, draggableProps, dragHandleProps } = provided || {}
  const [show, setShow] = useState(false)
  const [readMode, setReadMode] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [show])

  const todoName = todo.completed ? <del title={COMPLETED}>{todo.name}</del> : todo.name

  return (
    <Card className='my-2' ref={innerRef} {...draggableProps} {...dragHandleProps}>
      <Card.Header>
        <div title='todo' className='d-flex justify-content-between w-100'>
          <div className='d-flex justify-content-start'>
            <Form.Check
              onClick={(e) => {
                e.stopPropagation()
              }}
              inline
              type='checkbox'
              id={todo.id}
              checked={todo.completed}
              onChange={(e) => handleUpdate(e, todo.id, COMPLETED)}
            />
            <span className='todo-name'>{todoName}</span>
          </div>

          <div className='pointer w-auto pl-2 d-flex flex-end-center-align'>
            {todo.description && (
              <CustomAccordionToggle onClick={() => setReadMode(true)} eventKey={todo.id}>
                <GrTextAlignFull title='description-icon' color='#212529c2' className='mx-1 mb-1' />
              </CustomAccordionToggle>
            )}
            <CustomAccordionToggle handleShow={() => setShow(!show)} eventKey={todo.id}>
              <FaEdit className='h-100 mb-1 mx-1' title='show-todo-details' />
            </CustomAccordionToggle>
            <FaRegTrashAlt className='ml-1 h-100' title='delete-todo' onClick={() => handleDelete(todo.id)} />
          </div>
        </div>
      </Card.Header>
      {
        <Accordion.Collapse eventKey={todo.id}>
          <Card.Body>
            <TodoDetails readMode={readMode} show={show} todo={todo} handleUpdate={handleUpdate} />
          </Card.Body>
        </Accordion.Collapse>
      }
    </Card>
  )
}
export default TodoItem
