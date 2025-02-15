import { useState, useEffect } from 'react'
import Navegacao from '../components/Navegacao'
import stilo from "./Area.css"
import { Container, Typography } from '@mui/material'
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
        <Typography> ID: {plantao.id} </Typography><br/>
        <Typography> Plantonista 1: {plantao.id_pass} </Typography>
        <Typography> Plantonista 2: {plantao.id_receb} </Typography>
        <Typography> Observação: {plantao.observacao} </Typography>
        <Typography> Situação: { String(plantao.situacao)} </Typography>
        <Typography> Turno: {plantao.turno} </Typography>
      </Container>
    </>
  )
}

export default Detalhes