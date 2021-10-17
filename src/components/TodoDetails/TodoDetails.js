import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import { useEffect } from 'react'

const TodoDetails = (props) => {
  const {
    todo: { name, description, id },
    handleUpdate,
    show,
  } = props

  const inputRef = useRef()

  useEffect(() => {
    show && setTimeout(() => inputRef.current.focus(), 100)
  }, [show])

  return (
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
        />
      </Form.Group>
    </Form>
  )
}
export default TodoDetails
