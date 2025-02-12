import { useState, useEffect } from 'react'
import { Typography, Container, Box } from '@mui/material'
import Navegacao from '../components/Navegacao'
import CardLista from '../components/CardLista'
import api from '../services/api'


const MeusPlantoes = () => {
  useEffect( () => {
    api.get('plantao/meus')
    .then(( { data } ) => {
      setPlantao(data.plantao)
      console.log(data)
      .catch((e) => {
        alert(e)
      })
    })
  }, [])

  const [plantao, setPlantao] = useState([])

  return (
    <>
      <Navegacao/>
      <Container sx={{ width: '100vw', height: '89vh', backgroundColor: 'white',
      display:'flex', flexWrap:'wrap', flexDirection: 'column'
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
                Sem registro de plantão
              </Typography>
            </>
          )
        }
      </Container>
    </>
  )
}

export default MeusPlantoes