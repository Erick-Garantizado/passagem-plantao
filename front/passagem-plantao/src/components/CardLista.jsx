import React from 'react'
import { Backdrop, Button, Card, CardActions, CardContent, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { LoadingButton } from '@mui/lab'
// import api from '../services/api'


const CardLista = (props) => {
  const data = new Date(props.data)
  const navigate = useNavigate()

  const handleDetalhes =() => {
    navigate('/detalhes/' + props.chave)

  }

	const handleReceber = () => {
    
  //   api.post('/plantao/receber', {chave:props.chave})
  //   .then( ({ data }) => {
  //     setOpen(true)
  //     alert('recebido')
  //     window.location.reload()
  //   })
  //   .catch( (e) => {
  //     console.log(e)
  //     setOpen(false)
  //     alert('erro')
  //   })
  //   .finally( () => {
  //     setOpen(false)
  //   })
  
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 275, mb: 3 }} key={props.chave}>
          <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {/** plantonista */}
              Plantonista: {props.plantonista.nome}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {/** turno */}
              Turno: {props.turno}
              </Typography>
              <Typography variant="body2">
                Data: {data.toLocaleDateString("pt-BR")}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small" variant='contained' color='success' 
              onClick={handleDetalhes}>Detalhes</Button>
          </CardActions>
      </Card>
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          // open={open}
          // onClick={handleClose}
        >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default CardLista