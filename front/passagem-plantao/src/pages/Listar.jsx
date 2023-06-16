import React, { useState, useEffect } from 'react'
import Navegacao from '../components/Navegacao'
import { Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import api from '../services/api'

const Listar = () => {
  const [plantao, setPlantao] = useState([])

  useEffect(() => {
    api.get('/plantao/listar')
    .then( ( {data} ) => {
      setPlantao(data.plantao)
    })
    .catch( (e) => {
      alert(e)
    })
    
  }, [])
  
  
  return (
    <>
      <Navegacao/>
      <Container><br />        
        {
          plantao.map((dadoPlantao) => (
            <>
              <Card sx={{ minWidth: 275, mb:3 }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/** plantonista */}
                    Plantonista: {dadoPlantao.plantonista.nome}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/** turno */}
                    Turno: {dadoPlantao.turno}
                  </Typography><hr />
                  <Typography variant="body2">
                    {/** observação */}
                    Observação: <br />
                    {dadoPlantao.observacao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <LoadingButton size="small" variant='contained' color='success'>Receber plantão</LoadingButton>
                </CardActions>
              </Card>
            </>
          ))
        }
      </Container>
    </>
  )
}

export default Listar