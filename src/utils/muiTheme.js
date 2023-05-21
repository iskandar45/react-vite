import { createTheme } from '@mui/material'
import '@fontsource/montserrat'
import '@fontsource/roboto'
import '@fontsource/poppins'

const theme = createTheme({
  palette: {
    primary: {
      main: '#226957',
    },
    secondary: {
      main: '#EA9E1F',
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', 'Poppins'",
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '28px',
    },
    h3: {
      fontSize: '24px',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '16px',
    },
    h6: {
      fontSize: '14px',
    },
  },
})

export default theme
