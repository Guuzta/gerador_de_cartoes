import { 
    Grid, 
    Container, 
    Avatar, 
    Card, 
    CardContent, 
    Typography 
} from '@mui/material'

const card = (
    <>
        <CardContent 
            sx={{ 
                padding: '30px', 
                textAlign: 'center' 
            }}>
            <Avatar 
                src="/broken-image.jpg" 
                alt='Gustavo Bodziak' 
                sx={{ width: '50px', 
                    height: '50px', 
                    margin: '10px auto' 
                }}/>
            <Typography component='div' variant='h5'>
                Gustavo Bodziak
            </Typography>
            <Typography 
                gutterbottom 
                variant="subtitle1" 
                component="div" 
                sx={{ color: 'text.secondary' }}
            >
                Programador
            </Typography>
            <Typography gutterbottom variant='button' component='div'>
                (41) 98778-0396
            </Typography>
            <Typography gutterbottom variant='caption' component='div'>
                Guuhsilva13@outlook.com
            </Typography>
        </CardContent>
    </>
)

const UserCard = () => {
    return (
        <Container sx={{ height: '70vh', alignContent: 'center' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid size={{ xs: 12, sm: 7, md: 4 }}>
                    <Card variant="outlined">{card}</Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserCard