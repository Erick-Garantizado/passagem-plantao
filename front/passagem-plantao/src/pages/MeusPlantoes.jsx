import { useState, useEffect } from 'react'
import { Typography, Container } from '@mui/material'
import Navegacao from '../components/Navegacao'
import CardLista from '../components/CardLista'
import api from '../services/api'


const MeusPlantoes = () => {
  const [plantao, setPlantao] = useState([])

  useEffect( () => {
    api.get('plantao/meus')
    .then(( { data } ) => {
      setPlantao(data.plantao)
    })
    .catch((e) => {
      alert(e)
    })
  }, [])


  return (
    <>
      <Navegacao/>
      <Container sx={{ width: '100vw', backgroundColor: 'white',
      display:'flex', flexWrap:'wrap', mt:3
      }}><br />
        {
          plantao.length !== 0 ? plantao.map( (dado) => (      
            <CardLista 
            plantonista={0} 
            turno={dado.turno}
            data={dado.createdAt}
            chave={dado.id}
            descricao={dado.observacao}
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