import React, { useState } from 'react'
import Navegacao from '../components/Navegacao'
import { Alert, Box, Container, FormControlLabel,
        Radio, RadioGroup, TextField, 
        Typography} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { FormControl, Snackbar } from '@mui/base'


const Passar = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [turno, setTurno] = useState('')
    const [error, setError] = useState('')
    const [sucesso, setSucesso] = useState(false)
    const [observacao, setObservacao] = useState('')
    

    const handleClick = () => {
        setLoading(true)
        
        api.post('/plantao/salvar', {
            turno : turno.trim(),
            observacao: observacao.trim()
        }).then(({data}) => {
            setSucesso(true)
            setTimeout(() => {
                navigate('/listagem')
            }, 2000)
        }).catch((e) => {
            e.message === "Network Error" ? setError("Erro de conexão com banco.") : setError(e.message)
        }).finally(()=>{
            
            setLoading(false)
            setSucesso(false)
        })
    }

    const handleChange = (event) => {
        setTurno(event.target.value)
    }

    return (
        <>
          <Navegacao />
          <Container sx={{ width:'100vw', height:'89vh', backgroundColor: 'white', 
            display:'flex', flexDirection:'column', alignItems: 'center', boxShadow:10
           }} >
            <Snackbar open={sucesso} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity='success' sx={{ width: '100%' }}>
                    Dados salvos!
                </Alert>
            </Snackbar>
            <Snackbar open={error.length > 0} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity='error' sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
            <Typography variant='h4' mt={3} mb={5}>
              Informações sobre o plantão
            </Typography>
            <FormControl >
              <Box sx={{ display: 'flex', flexDirection:'column', 
                justifyContent: 'center', alignItems:'center'}} >
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <RadioGroup
                    sx={{ flexDirection: 'row',  }}
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="diurno"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="diurno" label="Diurno" control={
                        <Radio value='diurno' checked={turno === 'diurno'} onChange={handleChange}/>
                    }/>
                    <FormControlLabel value="noturno"  label="Noturno" control={
                        <Radio value='noturno' checked={turno === 'noturno'} onChange={handleChange}/>
                    }/>
                  </RadioGroup>
                </Box>
                <Box>
                  <TextField aria-colcount={5} 
                  multiline rows={7}  
                  label='Observação do Plantão' 
                  sx={{marginTop: '10px', marginBottom: '10px', width:'45vw'}}
                  onChange={(e)=>setObservacao(e.target.value)}
                  value={observacao}
                  />
                </Box>
                <Box>
                  <LoadingButton
                  loading={loading} 
                  color="primary" 
                  variant="contained" 
                  onClick={handleClick}
                  >
                      Enviar
                  </LoadingButton>
                </Box>
              </Box>
            </FormControl>
          </Container>
        </>
    )
}

export default Passar