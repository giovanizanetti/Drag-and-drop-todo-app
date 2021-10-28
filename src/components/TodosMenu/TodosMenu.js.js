import { useState } from 'react'
import { Dropdown, Modal, Button } from 'react-bootstrap'
import { HiDotsVertical } from 'react-icons/hi'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const TodosMenu = ({ handleDeleteAll }) => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  const handleClose = (option) => {
    if (option === 'cancel') {
      setShow(!show)
    } else {
      handleDeleteAll()
      setShow(!show)
    }
  }
  return (
    <>
      <Modal size='sm' show={show} aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Body>{t('menu.delete_all.alert.message')}</Modal.Body>
        <div className='d-flex justify-content-center'>
          <Button className='m-2' variant='secondary' onClick={() => handleClose('cancel')}>
            {t('menu.delete_all.alert.cancel')}
          </Button>
          <Button className='m-2' variant='danger' onClick={() => handleClose('yes')}>
            {t('menu.delete_all.alert.yes')}
          </Button>
        </div>
      </Modal>

      <Dropdown title='menu-toggle'>
        <Dropdown.Toggle as='div' id='dropdown-basic'>
          <HiDotsVertical className='mb-3 float-right pointer' />
        </Dropdown.Toggle>

        <Dropdown.Menu align='end'>
          <Dropdown.Item onClick={() => setShow(true)} href='#/action-1'>
            <div className='d-flex align-items-center'>
              <FaRegTrashAlt title='todos-menu' className='mx-1' /> {t('menu.delete_all.lable')}
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default TodosMenu
