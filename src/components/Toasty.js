import { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

const Toasty = () => {

  const [isOpen, setIsOpen] = useState(true)

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return
    }

    setIsOpen(false)
  }

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2500}
      onClose={handleClose}
    >
      <Alert variant="filled" severity="success" sx={{ color: 'white' }}>
        Cartão criado com sucesso!
      </Alert>
    </Snackbar>
  )
}

export default Toasty