import { useAccordionButton } from 'react-bootstrap'

function CustomAccordionToggle({ children, eventKey, handleShow }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleShow()
  })

  return (
    <button type='button' className='customtoggle' onClick={decoratedOnClick}>
      {children}
    </button>
  )
}

export default CustomAccordionToggle
