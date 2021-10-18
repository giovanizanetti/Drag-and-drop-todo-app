import { useState, useRef, useEffect } from 'react'
import { Button, Form, Alert, Container } from 'react-bootstrap'
import { v4 as generateUUID } from 'uuid'
import { useTranslation } from 'react-i18next'

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [alert, setAlert] = useState(null)
  const { t } = useTranslation()

  //Create use focus hook
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

    if (!name?.length) {
      setAlert(t('add_todo.name.alert'))
    } else {
      e.preventDefault()

      addTodo(newtodo)
      setName('')
      setDescription('')
    }
  }

  const handleChange = (e, field) => {
    setAlert(null)
    field === 'name' ? setName(e.target.value) : setDescription(e.target.value)
  }

  return (
    <Container>
      {alert && <Alert variant='warning'>{alert}</Alert>}
      <Form onSubmit={(e) => handleAddTodo(e)}>
        <Form.Control
          ref={inputRef}
          title='name'
          value={name}
          onChange={(e) => handleChange(e, 'name')}
          className='mb-3'
          type='text'
          placeholder={t('add_todo.name.placeholder')}
        />
        <Form.Control
          title='description'
          value={description}
          onChange={(e) => handleChange(e, 'description')}
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
