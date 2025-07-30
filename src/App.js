import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Header from "./partials/Header"



function App() {

  const  [mode, setMode] = useState(true)

  const theme = createTheme({
    colorSchemes: {
      dark: mode
    }
  })

  const toggleTheme = () => {
    if(mode === false) {
      setMode(true)
    } else {
      setMode(false)
    }
  }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline>
        <Header toggleTheme={toggleTheme} isDark={mode}>
          <h1>Hello World</h1>
        </Header>
      </CssBaseline>
    </ThemeProvider>
  )
}



export default App