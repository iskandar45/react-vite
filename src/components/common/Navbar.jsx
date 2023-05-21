import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Logo } from '../../assets/image'
import { Link } from 'react-router-dom/'
import MyButton from './Button'

function Navbar() {
  return (
    <AppBar position='static' color='transparent' component='nav' elevation={0}>
      <Container>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <img src={Logo} alt='logo' width='50px' height='50px' />
            </IconButton>
            <Typography variant='h3' component='span' sx={{ display: { xs: 'none', sm: 'block' } }}>
              Language
            </Typography>
          </Box>
          <Box gap='10px' display='flex'>
            <MyButton color='primary' component={Link} to='/login'>
              Login
            </MyButton>
            <MyButton color='secondary' component={Link} to='/register'>
              Register
            </MyButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
