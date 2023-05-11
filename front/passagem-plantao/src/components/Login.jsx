import { Box, Card, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from './suporte_TI-1.png'
import { LoadingButton } from '@mui/lab'
import axios from 'axios'

const Login = () => {
  const [matricula, setMatricula] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const resp = await axios.post('http://localhost:8080/login',{
      matricula:matricula
    })
    .then(() => {
      console.log(resp)
    })
    .catch((e) => {
      console.log(resp)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ mt: 5, py: 5, px: 10, width: '40%', display: 'flex', 
      alignItems: 'center', flexDirection: 'column', }}>
        <img src={ Logo } alt="logo TI" width="250" />
        
        <Typography variant='h4' align="center">
          Login
        </Typography>

        <TextField
          label="Matricula"
          sx={{ my: 3 }}
          fullWidth
          onChange={(e) => setMatricula(e.target.value)}
          value={matricula}
          />

        <LoadingButton loading={loading} 
        color="primary" 
        variant="contained" 
        fullWidth onClick={handleClick}>
          Entrar
        </LoadingButton>
      </Card>
    </Container>
    </>
  )
}

export default Login