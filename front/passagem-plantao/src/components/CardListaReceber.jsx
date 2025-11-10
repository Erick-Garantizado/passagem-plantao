import React from 'react'
import { Backdrop, Button, Card, CardActions, CardContent, CircularProgress, Typography, 
  Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { LoadingButton } from '@mui/lab'
import api from '../services/api'


const CardListaReceber = (props) => {
  const data = new Date(props.data)
  const navigate = useNavigate()
  const [openDialog, setOpenDialog] = React.useState(false)
  const [openBackdrop, setOpenBackdrop] = React.useState(false)

  const handleDetalhes =() => {
    navigate('/detalhes/' + props.chave)
  }

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

	const handleReceber = () => {
    setOpenBackdrop(true)
    api.post('/plantao/receber', {chave:props.chave})
    .then( ({ data }) => {
    setOpenDialog(false)
    setOpenBackdrop(false)      
    window.location.reload()
    })
    .catch( (e) => {
    console.log(e)
    setOpenBackdrop(false)
    alert('erro')
    })
    //.finally( () => {
    // setOpenBackdrop(false)
    //})
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
              <Button size="small" variant='contained' color='warning' 
              onClick={handleDetalhes}>Detalhes</Button>
              <Button size="small" variant='contained' color='success'
              onClick={handleOpenDialog} >Receber</Button>
          </CardActions>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Quer mesmo receber este plantão?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Certifique-se de que o plantão que está correto.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Não</Button>
          <Button onClick={handleReceber} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default CardListaReceber