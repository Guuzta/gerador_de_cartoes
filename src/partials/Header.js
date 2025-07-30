import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton
} from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import CardIcon from '@mui/icons-material/CreditCard'

const Header = ({ toggleTheme, isDark }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CardIcon sx={{ mr: 2 }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gerador de cartão
                    </Typography>

                    <IconButton
                        size="large"
                        color='inherit'
                        aria-label='settings'
                    >
                        {isDark ?
                            <LightModeIcon onClick={() => toggleTheme()} /> :
                            <DarkModeIcon onClick={() => toggleTheme()} />
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header