import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { ICEmail, ICInstagram, ICPhone, ICTelegram, ICYoutube } from '../../assets/icons'

const Footer = () => {
  return (
    <Box component='footer' color='#fff' sx={{ backgroundColor: 'primary.main', gap: '80px' }}>
      <Container sx={{ paddingBottom: '24px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography variant='h5'>About Us</Typography>
              <Typography variant='h6' align='justify' component='p'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography variant='h5'>Product</Typography>
              <Typography variant='h6' component='div' display='flex' gap='40px'>
                <ul style={{ marginBlockStart: 0, paddingInlineStart: '20px' }}>
                  <li>Arabic</li>
                  <li>English</li>
                  <li>Indonesia</li>
                  <li>Mandarin</li>
                </ul>
                <ul style={{ marginBlockStart: 0, paddingInlineStart: '20px' }}>
                  <li>Arabic</li>
                  <li>English</li>
                  <li>Indonesia</li>
                  <li>Mandarin</li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography variant='h5'>Address</Typography>
              <Typography variant='h6' align='justify' component='p'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque.
              </Typography>
              <Typography variant='h5' component='div'>
                Contact Us
              </Typography>
              <Box display='flex' gap={2} component='div'>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <img src={ICPhone} />
                </Avatar>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <img src={ICInstagram} />
                </Avatar>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <img src={ICYoutube} />
                </Avatar>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <img src={ICTelegram} />
                </Avatar>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <img src={ICEmail} />
                </Avatar>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
