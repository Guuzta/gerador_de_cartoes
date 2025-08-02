import {
    Grid,
    Container,
    Avatar,
    Card,
    CardContent,
    Typography
} from '@mui/material'

const UserCard = ({ user }) => {
    return (
        <Container sx={{ height: '70vh', alignContent: 'center' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <Card variant="outlined">
                        <CardContent
                            sx={{
                                padding: '30px',
                                textAlign: 'center'
                            }}>
                            <Avatar
                                src="/broken-image.jpg"
                                alt={user.name.value}
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    margin: '10px auto'
                                }} />
                            <Typography component='div' variant='h5'>
                                {user.name.value}
                            </Typography>
                            <Typography
                                gutterbottom
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                                 {user.job.value}
                            </Typography>
                            <Typography gutterbottom variant='button' component='div'>
                                {user.phone.value}
                            </Typography>
                            <Typography gutterbottom variant='caption' component='div'>
                                {user.email.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserCard