import { useState, useEffect } from 'react'
//import Navegacao from '../components/Navegacao'
import { Container, Typography, Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import api from '../services/api'


const Detalhes = () => {
  const { id } = useParams()
  const [plantao, setPlantao] = useState({})

  useEffect( () => {
    api.get('plantao/detalhes/' + id)
    .then(({ data }) => {
      setPlantao(data.plantao)
      console.log(data.plantao.situacao)
    })
    .catch((e) => {
      alert(e)
    })
    
  } , [])
  return (
    <>
      <Container sx={{ width: '100vw', height: '100vh' }} >
        <Typography> Plantonista : {plantao.id_pass} </Typography>
        <Typography> Receptor(a) : {plantao.id_receb} </Typography>
        <Typography> Observação: {plantao.observacao} </Typography>
        <Typography> Turno: {plantao.turno} </Typography>
        <Typography> Situação: 
          {
            plantao.situacao === false ? 
            ( <Button variant="contained" color="error" size="small" >Pendente</Button> ) :
            ( <Button variant="contained" color="success">OK</Button> )
          } 
        </Typography>

      </Container>
    </>
  )
}

export default Detalhes