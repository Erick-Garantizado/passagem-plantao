import React, { useState, useEffect } from 'react'
import Navegacao from '../components/Navegacao'
import { Container, Typography } from '@mui/material'
import api from '../services/api'
import CardListaReceber from '../components/CardListaReceber'

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
      <Container sx={{ width: '100vw', backgroundColor: 'white',
        display:'flex', flexWrap:'wrap', mt:3
      }}><br />
        {
          plantao.length !== 0 ? plantao.map( (dado) => (
            <CardListaReceber 
            plantonista={dado.plantonista} 
            turno={dado.turno}
            data={dado.createdAt}
            descricao={dado.observacao}
            chave={dado.id}
            />
          ))
          :
          (
            <>
              <Typography variant='h4'>
                Sem registro de plantão a ser recebido
              </Typography>
            </>
          )
        }
      </Container>
    </>
  )
}

export default Listar