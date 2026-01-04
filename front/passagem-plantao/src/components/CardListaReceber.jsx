import { useState, useRef, useEffect } from 'react'
import { Backdrop, Button, Card, CardActions, CardContent, CircularProgress, Typography, 
  Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material'
// import { LoadingButton } from '@mui/lab'
import api from '../services/api'
import PdfButton from './PdfButton'


const CardListaReceber = (props) => {
  const data = new Date(props.data)
  const [openDialogReceber, setOpenDialogReceber] = useState(false)
  const [openDialogDetalhes, setOpenDialogDetalhes] = useState(false)
  const [openBackdrop, setOpenBackdrop] = useState(false)

    const handleOpenDialogDetalhes = () => {
    setOpenDialogDetalhes(true)
  }

  const handleCloseDialogDetalhes = () => {
    setOpenDialogDetalhes(false)
  }

  const handleOpenDialogReceber = () => {
    setOpenDialogReceber(true)
  }

  const handleCloseDialogReceber = () => {
    setOpenDialogReceber(false)
  }

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (openDialogReceber) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDialogReceber]);

	const handleReceber = () => {
    setOpenBackdrop(true)
    api.post('/plantao/receber', {chave:props.chave})
    .then( ({ data }) => {
    setOpenDialogReceber(false)
    setOpenBackdrop(false)      
    window.location.reload()
    })
    .catch( (e) => {
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
              onClick={handleOpenDialogDetalhes}>Detalhes</Button>
              <Button size="small" variant='contained' color='success'
              onClick={handleOpenDialogReceber} >Receber</Button>
          </CardActions>
      </Card>
      {/* Dialogo de receber o plantao */}
      <Dialog
        open={openDialogReceber}
        onClose={handleCloseDialogReceber}
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
          <Button onClick={handleCloseDialogReceber}> Não </Button>
          <Button onClick={handleReceber} autoFocus> Sim </Button>
        </DialogActions>
      </Dialog>
      {/* detalhes */}
      <Dialog
        open={openDialogDetalhes}
        onClose={handleOpenDialogDetalhes}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"> Turno: {props.turno.toUpperCase()} <br/> Data: {data.toLocaleDateString("pt-BR")}</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            //tabIndex={-1}
          >
            {props.descricao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PdfButton id={props.chave}/>
          <Button onClick={handleCloseDialogDetalhes}>Fechar</Button>
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