import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Navegacao from '../components/Navegacao'
import CardListaReceber from '../components/CardListaReceber'
import Esqueleto from '../components/Esqueleto'
import SemRegistro from '../components/SemRegistro'
import api from '../services/api'


const Listar = () => {
  const [plantao, setPlantao] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    api.get('/plantao/listar')
      .then( ({ data }) => {
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
      <Navegacao />
      <Container sx={{ width: '100vw', backgroundColor: 'white',
        display:'flex', flexWrap:'wrap', mt:3
      }}><br />
        {
          loading ? (
            <Esqueleto/>
          ):
          plantao.length > 0 ? (
          plantao.map( (dado) => (
            <CardListaReceber
            key={dado.id}
            plantonista={dado.plantonista} 
            turno={dado.turno}
            data={dado.createdAt}
            descricao={dado.observacao}
            chave={dado.id}
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

export default Listar