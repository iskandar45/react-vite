import { Button, Typography } from '@mui/material'
import React from 'react'

const MyButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} variant='contained' sx={{ padding: '10px 20px', borderRadius: '8px' }}>
      <Typography sx={{ textTransform: 'capitalize' }} color='#fff'>
        {children}
      </Typography>
    </Button>
  )
}

export default MyButton
