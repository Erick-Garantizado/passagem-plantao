import React, { useState } from 'react'
import Navegacao from '../components/Navegacao'
import { Alert, Box, Container, FormControlLabel,
        Radio, RadioGroup, TextField } from '@mui/material'
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
            turno : turno,
            observacao: observacao
        }).then(({data}) => {
            setSucesso(true)
            console.log(data)
            setTimeout(() => {
                navigate('/listagem')
            }, 2000)
        }).catch((e) => {
            setError(e.response.status)
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
            <Container >
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
                <h2>Informações sobre o plantão</h2>
                <hr /> <br />
                {/* sx={{ display: 'flex' }} */}
                <FormControl >
                    <Box >
                        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            
                            <RadioGroup
                                sx={{ flexDirection: 'row',  }}
                                aria-labelledby="radio-buttons-group-label"
                                defaultValue="diurno"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="diurno" label="Diurno" control={
                                    <Radio value='diurno' checked={turno === 'diurno'} onChange={handleChange}/>
                                }  />
                                <FormControlLabel value="noturno"  label="Noturno" control={
                                    <Radio value='noturno' checked={turno === 'noturno'} onChange={handleChange}/>
                                }/>
                            </RadioGroup>
                        </Box>
                        <Box>
                            <TextField aria-colcount={5} 
                            multiline rows={7} fullWidth 
                            label='Observação do Plantão' 
                            sx={{marginTop: '10px', marginBottom: '10px'}}
                            onChange={(e)=>setObservacao(e.target.value)}
                            value={observacao}
                            />
                        </Box>
                        <LoadingButton
                        loading={loading} 
                        color="primary" 
                        variant="contained" 
                        onClick={handleClick}
                        fullWidth>
                            Enviar
                        </LoadingButton>
                    </Box>
                </FormControl>
            </Container>
        </>
    )
}

export default Passar