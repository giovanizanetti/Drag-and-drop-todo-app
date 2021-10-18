import { useAccordionButton } from 'react-bootstrap'

function CustomAccordionToggle({ children, eventKey, handleShow }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleShow && handleShow()
  })

  return (
    <div className='custom-toggle pointer' onClick={decoratedOnClick}>
      {children}
    </div>
  )
}

export default CustomAccordionToggle
