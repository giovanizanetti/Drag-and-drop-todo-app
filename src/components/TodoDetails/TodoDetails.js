import { Accordion, Form } from 'react-bootstrap'
import { useRef } from 'react'
import { useEffect } from 'react'

const TodoDetails = (props) => {
  const {
    todo: { name, description, id },
    handleUpdate,
  } = props

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current[0].focus()
  }, [])

  return (
    <Accordion.Body>
      <Form ref={inputRef} className='p-2'>
        <Form.Group ref={inputRef} className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control className='p-2' onChange={(e) => handleUpdate(e, id, 'name')} type='text' value={name} />
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
    </Accordion.Body>
  )
}
export default TodoDetails
