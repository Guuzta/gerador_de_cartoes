import { TextField, Typography, Box, Button, Grid } from '@mui/material'

const UserForm = () => {
    return (
        <Box 
            component='form' 
            autoComplete='off'
            textAlign='center'
          >

            <Grid
                container
                rowSpacing={4}
                sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'   
                }}
            >
                <Grid size={12}>
                    <Typography variant='h4' component='h1'>
                        Formulário de Cadastro
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField name='name' label='Nome completo' variant='outlined' sx={{ width: '100%'}}/>
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField name='job' label='Cargo' variant='outlined'  sx={{ width: '100%'}}/>
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField name='phone' label='Telefone' variant='outlined' sx={{ width: '100%'}}/>
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField name='email' label='Email' variant='outlined' sx={{ width: '100%'}}/>
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <Button variant='contained' sx={{ width: '100%', padding: '10px 0px'}}>Gerar Cartão!</Button>
                </Grid>

            </Grid>

        </Box>
    )
}

export default UserForm