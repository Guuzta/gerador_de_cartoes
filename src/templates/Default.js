import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material'

import Header from '../partials/Header'

const TemplateDefault = ({ children }) => {

    const [mode, setMode] = useState(true)

    const theme = createTheme({
        colorSchemes: {
            dark: mode
        }
    })

    const toggleTheme = (isDark) => {
        isDark ? setMode(false) : setMode(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Header toggleTheme={toggleTheme} isDark={mode} />
                <Container sx={{ mt: 8 }}>
                    {children}
                </Container>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default TemplateDefault