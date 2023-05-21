import React from 'react'
import PropTypes from 'prop-types'
import { Footer, Navbar } from '../common'
import { Box } from '@mui/material'

const MainApp = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box component='main' sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

MainApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainApp
