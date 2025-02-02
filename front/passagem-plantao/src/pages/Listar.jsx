import React, { useState, useEffect } from 'react'
import Navegacao from '../components/Navegacao'
import { Container, Typography, Box } from '@mui/material'
import api from '../services/api'
import CardLista from '../components/CardLista'

const Listar = () => {
  
  useEffect( () => {
    api.get('/plantao/listar')
      .then( ({ data }) => {
        setPlantao(data.plantao)        
      })
      .catch((e) => {
        alert(e)
      })
  }, [])

  const [plantao, setPlantao] = useState([])
  

  return (
    <>
      <Navegacao />
      <Container sx={{ width: '100vw', height: '93vh', display:'flex',
        flexWrap:'wrap', flexDirection: 'column'
       }}><br />
        {
          plantao.length !== 0 ? plantao.map( (dado) => (
            <CardLista 
            plantonista={dado.plantonista} 
            turno={dado.turno}
            observacao={dado.observacao}
            chave={dado.id}
            />
          )) 
          :
          (
            <>
              <Typography variant='h4'>
                Sem registro de plantao a ser recebido
              </Typography>
              <Box className="corpo" ></Box>
            </>
          )
        }
      </Container>
    </>
  )
}

export default Listar