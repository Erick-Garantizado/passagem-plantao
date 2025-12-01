import { useState } from 'react'
import { Backdrop, Button, Card, CardActions, CardContent, 
  CircularProgress, Typography, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle } from '@mui/material'
import PdfButton from './PdfButton'
// import api from '../services/api'


const CardLista = (props) => {
  const data = new Date(props.data)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleDetalhes =() => {
    setOpen(true)
  }

  // const descriptionElementRef = useRef(null);
  // useEffect(() => {
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 275, mb: 3 }} key={props.chave}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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

      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Turno: {props.turno.toUpperCase()} <br/> Data: {data.toLocaleDateString("pt-BR")}
        </DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            //tabIndex={-1}
          >
            {props.descricao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PdfButton id={props.chave}/>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CardLista