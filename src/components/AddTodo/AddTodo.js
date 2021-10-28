import { useState, useRef, useEffect } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { v4 as generateUUID } from 'uuid'
import { useTranslation } from 'react-i18next'
import { NAME, DESCRIPTION } from '../../config/constants'
import { useAlert } from '../../hooks/useAlert'

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { t } = useTranslation()
  const [alert, setAlert, isInvalid, setIsInvalid, setDirty] = useAlert(() => name.length)

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleAddTodo = (e) => {
    const newtodo = {
      name,
      description,
      completed: false,
      id: generateUUID(),
    }
    if (isInvalid) return
    if (!name?.length) {
      setIsInvalid(true)
    } else {
      e.preventDefault()
      setIsInvalid(false)
      addTodo(newtodo)
      setName('')
      setDescription('')
    }
  }

  const handleNameChange = (e) => {
    const maxLengthAllowed = 13
    setDirty(true)
    if (name.length > maxLengthAllowed) {
      const trimmedName = e.target.value.substr(0, maxLengthAllowed - 1)
      setIsInvalid(true)
      setName(trimmedName)
    } else {
      setIsInvalid(false)
      setAlert(null)
      setName(e.target.value)
    }
  }

  const handleDescriptionChange = (e) => {
    setAlert(null)
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // // setTimeout(() => handleAddTodo(e), 100)
    handleAddTodo(e)
    setDirty(false)
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
          <Form.Control
            isInvalid={isInvalid}
            ref={inputRef}
            title={'name'}
            value={name}
            onChange={(e) => handleNameChange(e)}
            type='text'
            placeholder={t('add_todo.name.placeholder')}
          />
          {alert && <Form.Control.Feedback type='invalid'>{alert}</Form.Control.Feedback>}
        </div>
        <Form.Control
          title={DESCRIPTION}
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
          className='mb-3'
          as='textarea'
          rows={3}
          placeholder={t('add_todo.description.placeholder')}
        />
        <Button
          title='addtodo-button'
          onClick={(e) => handleAddTodo(e)}
          className='mx-auto d-flex mb-5'
          variant='primary center'
        >
          {t('handlers.save')}
        </Button>
      </Form>
    </Container>
  )
}

export default AddTodo
