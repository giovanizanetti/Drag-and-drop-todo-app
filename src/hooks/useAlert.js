import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useAlert = (length) => {
  const [dirty, setDirty] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [alert, setAlert] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('effect')
    console.log(dirty && 'DIRTY')
    if (dirty && !length) {
      console.log(length, 'THis is lenght')
      setIsInvalid(true)
      setAlert(t('add_todo.name.no_length_alert'))
    }
    if (length > 13) {
      setIsInvalid(true)
      setAlert(t('add_todo.name.max_length_alert'))
    }
  }, [isInvalid, alert, length, t, dirty])

  return [alert, setAlert, isInvalid, setIsInvalid, setDirty, dirty]
}
