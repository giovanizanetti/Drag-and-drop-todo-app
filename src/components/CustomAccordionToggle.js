import { useAccordionButton } from 'react-bootstrap'

function CustomAccordionToggle({ children, eventKey, handleShow }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleShow && handleShow()
  })

  return (
    <div className='customtoggle pointer' onClick={decoratedOnClick}>
      {children}
    </div>
  )
}

export default CustomAccordionToggle
