import { useState } from 'react'
import Navegacao from '../components/Navegacao'
import { Alert, Box, Container, FormControlLabel,
        Radio, RadioGroup, TextField, Card, CardContent,
        Typography,
        Divider} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { FormControl, Snackbar } from '@mui/base'

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

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
            observacao: observacao
        }).then(({data}) => {
            setSucesso(true)
            setTimeout(() => {
                navigate('/listagem')
            }, 2000)
        }).catch((e) => {
            e.message === "Network Error" 
            ? setError("Erro de conexão com banco.")
            : setError(e.message)
        })
        
    }

    const handleChange = (event) => {
        setTurno(event.target.value)
    }

    return (
        <>
          <Navegacao />
          <Container
           sx={{ width:'100vw', height:'88vh', 
            display:'flex', flexDirection:'column', alignItems: 'center', mt:2
          }}
          >
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
            <Card sx={{ width: "60vw", mt: 4, p: 3, boxShadow: 6, borderRadius: 3 }}>
              <CardContent>
                <Typography variant='h4' mt={4} mb={2} fontWeight="bold" textAlign='center'> 
                  Informações do plantão
                </Typography>
                <Divider sx={{ my: 3 }} />
                <FormControl >
                  <Box sx={{ display: 'flex', flexDirection:'column', 
                    justifyContent: 'center', alignItems:'center'}} >
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                      <RadioGroup
                        sx={{ flexDirection: 'row'}}
                        aria-labelledby="radio-buttons-group-label"
                        defaultValue="diurno"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel sx={{mr:3}} value="diurno" label={<><WbSunnyIcon /> Diurno</>} control={
                            <Radio value='diurno' checked={turno === 'diurno'} onChange={handleChange}/>
                        }/>
                        <FormControlLabel sx={{ml:3}} value="noturno"  label={<><NightsStayIcon /> Noturno</>} control={
                            <Radio value='noturno' checked={turno === 'noturno'} onChange={handleChange}/>
                        }/>
                      </RadioGroup>
                    </Box>
                    <Box>
                      <TextField aria-colcount={5} 
                      multiline rows={7}  
                      label='Observação do Plantão' 
                      sx={{mt:2, mb:3, width:'45vw', borderRadius:2, 
                        "& .MuiOutlinedInput-root": {borderRadius:2, backgroundColor:'#fafafa'}
                      }}
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
                      sx={{
                        px: 4,
                        py: 1.3,
                        borderRadius: 2,
                        fontSize: "1.1rem",
                        boxShadow: 3
                      }}
                      >
                          Enviar
                      </LoadingButton>
                    </Box>
                  </Box>
                </FormControl>
              </CardContent>
            </Card>
          </Container>
        </>
    )
}

export default Passar