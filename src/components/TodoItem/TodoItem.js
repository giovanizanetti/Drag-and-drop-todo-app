import { Form, Accordion, Card } from 'react-bootstrap'
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { GrTextAlignFull } from 'react-icons/gr'
import { COMPLETED } from '../../config/constants'

import TodoDetails from '../TodoDetails/TodoDetails'
import CustomAccordionToggle from '../CustomAccordionToggle'

const TodoItem = ({ todo, handleDelete, handleUpdate, provided }) => {
  const { completed, description, name, id } = todo
  const { innerRef, draggableProps, dragHandleProps } = provided || {}
  const [show, setShow] = useState(false)
  const [readMode, setReadMode] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [show])

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
              id={id}
              checked={completed}
              onChange={(e) => handleUpdate(e, id, COMPLETED)}
            />
            <span title='todo-name' className={`todo-name ${completed && 'line-through'}`}>
              {name}
            </span>
          </div>

          <div className='pointer w-auto pl-2 d-flex flex-end-center-align'>
            {description && (
              <CustomAccordionToggle onClick={() => setReadMode(true)} eventKey={id}>
                <GrTextAlignFull title='description-icon' color='#212529c2' className='mx-1 mb-1' />
              </CustomAccordionToggle>
            )}
            <CustomAccordionToggle handleShow={() => setShow(!show)} eventKey={id}>
              <FaEdit className='h-100 mb-1 mx-1' title='show-todo-details' />
            </CustomAccordionToggle>
            <FaRegTrashAlt className='ml-1 h-100' title='delete-todo' onClick={() => handleDelete(id)} />
          </div>
        </div>
      </Card.Header>
      {
        <Accordion.Collapse eventKey={id}>
          <TodoDetails readMode={readMode} show={show} todo={todo} handleUpdate={handleUpdate} />
        </Accordion.Collapse>
      }
    </Card>
  )
}
export default TodoItem
