import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Navegacao from '../components/Navegacao'
import CardLista from '../components/CardLista'
import Esqueleto from '../components/Esqueleto'
import SemRegistro from '../components/SemRegistro'
import api from '../services/api'


const MeusPlantoes = () => {
  const [plantao, setPlantao] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    api.get('plantao/meus')
    .then(( { data } ) => {
      setPlantao(data.plantao)
    })
    .catch((e) => {
      alert(e)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])


  return (
    <>
      <Navegacao/>
      <Container sx={{ width: '100vw', backgroundColor: 'white',
      display:'flex', flexWrap:'wrap', mt:3
      }}><br />
        {
          loading ? (
            <Esqueleto/>
          ) : plantao.length > 0 ? (
          plantao.map( (dado) => (      
            <CardLista
            key={dado.id}
            turno={dado.turno}
            data={dado.createdAt}
            chave={dado.id}
            descricao={dado.observacao}
            />
          )) 
          ): (
            <SemRegistro/>
          )
        }
      </Container>
    </>
  )
}

export default MeusPlantoes