import { useEffect, useState } from 'react'
import { Alert, Avatar, Box, Button, Container, Divider, IconButton, InputAdornment,
  Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff, PhotoCamera } from '@mui/icons-material'
import Navegacao from '../components/Navegacao'
import api from '../services/api'
import { LoadingButton } from '@mui/lab'


const Perfil = () => {
  const [email, setEmail] = useState('')
  const [imagemAtual, setImagemAtual] = useState('')
  const [imagem, setImagem] = useState(null)
  const [preview, setPreview] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)
  const [loading, setLoading] = useState(true)
  const [salvando, setSalvando] = useState(false)
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
      api.get('plantao/usuario/atual')
      .then( ({ data }) => {
        setEmail(data.usuario.email)
        setImagemAtual() //criar o backend para imagem
      })
      .catch( ({ error }) => {
        console.error(error)
        setMsg('Não foi possível carregar o perfil.')
        setOpen(true)
      }) 
      .finally( () => {
        setLoading(false)
      })
  }, [])

  const handleCloseAlert = (event, reason) => {
    setOpen(false)
  }
  
  const handleImagem = (event) => {
    const arquivo = event.target.files[0]
    if (!arquivo) {
      return;
    }
    setImagem(arquivo)
    const imagemUrl = URL.createObjectURL(arquivo)
    setPreview(imagemUrl)
  }

  const handleSalvar = async (event) => {
    event.preventDefault()
    if (senha !== confirmarSenha) {
      setMsg('As senhas não são iguais.')
      setOpen(true)
      return;
    }
    setSalvando(true)
    const formData = new FormData()
    formData.append('email', email)
    if (imagem) {
      formData.append('imagem', imagem)
    }
    if (senha) {
      formData.append('senha', senha)
    }
    api.put('usuario/perfil', formData)
    .then( () => {
      setMsg('Perfil atualizado com sucesso!')
      setSenha('')
      setConfirmarSenha('')
      setOpen(true)
    })
    .catch( ({ error }) => {
      console.error(error)
      setMsg('Não foi possível atualizar o perfil.')
      setOpen(true)
    })
    .finally( () => {
      setSalvando(false)
    })
  }
  
  return (
    <>
      <Navegacao />
      <Container
        maxWidth="sm"
        sx={{ mt:5, mb: 5 }}
      >
        <Snackbar 
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleCloseAlert}
          >
          <Alert severity='error' sx={{ width:'100%' }}
            onClose={handleCloseAlert}
          >
            {msg}
          </Alert>
        </Snackbar>
        <Paper 
          elevation={3}
          sx={{ p: 4 }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Meu perfil
          </Typography>
          <Box 
            component="form"
            onSubmit={handleSalvar}
          >
            <Stack
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Avatar
                src={preview || imagemAtual}
                sx={{ width: 140, height: 140, fontSize: 50 }}
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
              >
                Alterar imagem
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImagem}
                />
              </Button>
            </Stack>
            <Divider sx={{ mb: 4 }} />
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ mb: 3 }}
            />
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
            >
              Alterar senha
            </Typography>
            <TextField
              fullWidth
              label="Nova senha"
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      edge="end"
                    >
                      {mostrarSenha
                        ? <VisibilityOff />
                        : <Visibility />
                      }
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              label="Confirmar nova senha"
              type={mostrarConfirmacao ? 'text' : 'password'}
              value={confirmarSenha}
              onChange={(event) =>
                setConfirmarSenha(event.target.value)
              }
              sx={{ mb: 4 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setMostrarConfirmacao(!mostrarConfirmacao)
                      }
                      edge="end"
                    >
                      {mostrarConfirmacao
                        ? <VisibilityOff />
                        : <Visibility />
                      }
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={salvando}
            >
              Salvar alterações
            </LoadingButton>
          </Box>
        </Paper>
      </Container>
    </>
  )
}


export default Perfil