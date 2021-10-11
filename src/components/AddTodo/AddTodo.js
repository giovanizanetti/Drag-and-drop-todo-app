import { useState } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import { v4 as generateUUID } from 'uuid'

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [alert, setAlert] = useState(null)

  const handleAddTodo = (e) => {
    if (!name?.length) {
      setAlert('Todo must at least has a name!')
    } else {
      e.preventDefault()
      const newtodo = {
        name,
        description,
        completed: false,
        id: generateUUID(),
      }
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
    <>
      {alert && <Alert variant='warning'>{alert}</Alert>}
      <Modal.Dialog>
        <Modal.Body>
          <Form onSubmit={(e) => handleAddTodo(e)}>
            <Form.Control
              title='name'
              value={name}
              onChange={(e) => handleChange(e, 'name')}
              className='mb-3'
              type='text'
              placeholder='Add your todo name here'
            />
            <Form.Control
              title='description'
              value={description}
              onChange={(e) => handleChange(e, 'description')}
              className='mb-3'
              as='textarea'
              rows={3}
              placeholder='Describe your todo here'
            />
            <Button
              title='addtodo-button'
              onClick={(e) => handleAddTodo(e)}
              className='mx-auto d-flex'
              variant='primary center'
            >
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </>
  )
}

export default AddTodo