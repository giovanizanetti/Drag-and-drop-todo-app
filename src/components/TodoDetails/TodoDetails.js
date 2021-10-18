import { Form, Button } from 'react-bootstrap'
import { useRef } from 'react'
import { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

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
    <>
      <div className='d-flex justify-content-end mb-2'>
        <CustomAccordionToggle>
          <GrClose />
        </CustomAccordionToggle>
      </div>

      <Form className='p-2'>
        <Form.Group className='mb-3'>
          <Form.Control
            ref={inputRef}
            className='p-2'
            onChange={(e) => handleUpdate(e, id, 'name')}
            type='text'
            value={name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            className='p-2'
            as='textarea'
            value={description}
            onChange={(e) => handleUpdate(e, id, 'description')}
            placeholder={t('add_todo.description.placeholder')}
          />
        </Form.Group>

        <div className='d-flex justify-content-end pt-2'>
          <CustomAccordionToggle>
            <Button>{t('handlers.save')}</Button>
          </CustomAccordionToggle>
        </div>
      </Form>
    </>
  )
}
export default TodoDetails
