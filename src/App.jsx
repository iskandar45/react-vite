import { ThemeProvider } from '@emotion/react'
import theme from './utils/muiTheme'
import Routes from './routes/Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
