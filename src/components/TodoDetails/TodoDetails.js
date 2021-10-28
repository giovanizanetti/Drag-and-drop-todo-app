import { Form, Button, Card } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'
import { NAME, DESCRIPTION } from '../../config/constants'
import { useAlert } from '../../hooks/useAlert'
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
  const [alert, setAlert, isInvalid, setIsInvalid, setDirty] = useAlert(name.length)

  useEffect(() => {
    if (readMode) return
    show && setTimeout(() => inputRef.current.focus(), 100)
  }, [show, readMode, name, t])

  const handleNameChange = (e) => {
    const maxLengthAllowed = 13
    setDirty(true)
    if (name.length > maxLengthAllowed) {
      const trimmedName = e.target.value.substr(0, maxLengthAllowed - 1)
      handleUpdate(trimmedName, id, NAME)
    } else {
      setIsInvalid(false)
      setAlert(null)
      handleUpdate(e.target.value, id, NAME)
    }
  }

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
            className=' p-2'
            title={NAME}
            isInvalid={isInvalid}
            ref={inputRef}
            onChange={(e) => handleNameChange(e)}
            type='text'
            value={name}
          />
          {alert && <Form.Control.Feedback type='invalid'>{alert}</Form.Control.Feedback>}
          <Form.Control
            title={DESCRIPTION}
            className='p-2 mt-3'
            as='textarea'
            value={description}
            onChange={(e) => handleUpdate(e.target.value, id, DESCRIPTION)}
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
