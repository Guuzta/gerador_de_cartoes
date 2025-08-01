import { useState } from 'react'
import {
    TextField,
    Typography,
    Box,
    Button,
    Grid
} from '@mui/material'

import UserCard from './UserCard'

const UserForm = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false
        },
        job: {
            value: '',
            error: false
        },
        phone: {
            value: '',
            error: false
        },
        email: {
            value: '',
            error: false
        }
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value
            }
        })

        console.log(form)
    }

    const handleRegisterButton = () => {
        let hasError = false

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Preencha o campo nome!'
            }
        }

        if (!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Preencha o campo cargo!'
            }
        }

        if (!form.phone.value) {
            hasError = true

            newFormState.phone = {
                value: form.phone.value,
                error: true,
                helperText: 'Preencha o campo telefone!'
            }
        }

        if (!form.email.value) {
            hasError = true

            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: 'Preencha o campo email!'
            }
        }


        if (hasError) {
            return setForm(newFormState)
        }

        toggleCardView()

    }

    const toggleCardView = () => {

        setIsLoading(true)

        setTimeout(() => {
            setIsOpen(true)
            setIsLoading(false)
        }, 2000)
    }

    return (

        <Box
            component='form'
            autoComplete='off'
            textAlign='center'
            sx={{ '& .MuiFormHelperText-root': { marginLeft: 0.5, marginTop: 1 } }}
        >
            <Grid
                container
                rowSpacing={3}
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
                    <TextField
                        error={form.name.error}
                        helperText={form.name.error ? form.name.helperText : ''}
                        onChange={handleInputChange}
                        value={form.name.value}
                        name='name'
                        label='Nome completo'
                        variant='outlined'
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField
                        error={form.job.error}
                        helperText={form.job.error ? form.job.helperText : ''}
                        onChange={handleInputChange}
                        value={form.job.value}
                        name='job'
                        label='Cargo'
                        variant='outlined'
                        sx={{ width: '100%' }} />
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField
                        error={form.phone.error}
                        helperText={form.phone.error ? form.phone.helperText : ''}
                        onChange={handleInputChange}
                        name='phone'
                        label='Telefone'
                        variant='outlined'
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <TextField
                        error={form.email.error}
                        helperText={form.email.error ? form.email.helperText : ''}
                        onChange={handleInputChange}
                        name='email'
                        label='Email'
                        variant='outlined'
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <Button
                        loading={isLoading}
                        onClick={handleRegisterButton}
                        variant='contained'
                        sx={{
                            width: '100%',
                            padding: '10px 0px'
                        }}
                    >
                        Gerar Cartão!
                    </Button>
                </Grid>

            </Grid>

            {isOpen && <UserCard user={form} />}
        </Box>


    )
}

export default UserForm