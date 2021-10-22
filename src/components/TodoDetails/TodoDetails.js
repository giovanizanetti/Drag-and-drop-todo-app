import { Form, Button, Card } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'
import { NAME, DESCRIPTION } from '../../config/constants'

import CustomAccordionToggle from '../CustomAccordionToggle'

const TodoDetails = (props) => {
  const { t } = useTranslation()
  const {
    todo: { name, description, id },
    handleUpdate,
    show,
    readMode,
  } = props

  const inputRef = useRef()

  useEffect(() => {
    if (readMode) return
    show && setTimeout(() => inputRef.current.focus(), 100)
  }, [show, readMode])

  return (
    <Card.Body title='todo-details'>
      <div className='d-flex justify-content-end mb-2'>
        <CustomAccordionToggle>
          <GrClose />
        </CustomAccordionToggle>
      </div>

      <Form className='p-2'>
        <Form.Group className='mb-3'>
          <Form.Control
            title={NAME}
            ref={inputRef}
            className='p-2'
            onChange={(e) => handleUpdate(e, id, NAME)}
            type='text'
            value={name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            title={DESCRIPTION}
            className='p-2'
            as='textarea'
            value={description}
            onChange={(e) => handleUpdate(e, id, DESCRIPTION)}
            placeholder={t('add_todo.description.placeholder')}
          />
        </Form.Group>

        <div className='d-flex justify-content-end pt-2'>
          <CustomAccordionToggle>
            <Button>{t('handlers.save')}</Button>
          </CustomAccordionToggle>
        </div>
      </Form>
    </Card.Body>
  )
}
export default TodoDetails
