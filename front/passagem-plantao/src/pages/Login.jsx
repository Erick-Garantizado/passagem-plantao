import { Alert, Card, Container, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from './suporte_TI-1.png'
import { LoadingButton } from '@mui/lab'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [matricula, setMatricula] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    api.post('/login',{
      matricula:matricula
    })
    .then(({data}) => {
      // redirecionar para area de passagem de plantao
      localStorage.setItem('user-token', data.token)
      navigate('/area')
    })
    .catch((e) => {
      // Popup dizendo que nao foi encontrado ninguem com a matricula informada
      setError(e.response.data.error)
      setOpen(true)
    })
    .finally(() => {
      setLoading(false)
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    })
  }

  return (
    <>
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity='error' sx={{ width:'100%' }}>
        {error}
      </Alert>
    </Snackbar>

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