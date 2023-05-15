import React, { useState } from 'react'
import Navegacao from '../components/Navegacao'
import { Box, Container, FormControlLabel,
        Radio, RadioGroup, TextField } from '@mui/material'
import stilo from './Area.css'
import { LoadingButton } from '@mui/lab'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'


const Passar = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [turno, setTurno] = useState()
    const [celular, setCelular] = useState(0)
    const [fone, setFone] = useState(0)
    const [tablet, setTablet] = useState(0)
    const [roteador, setRoteador] = useState(0)
    const [tonerPB, setTonerPB] = useState(0)
    const [tonerColorido, setTonerColorido] = useState(0)
    const [cxFerramentas, setCxferramentas] = useState(0)
    const [webcam, setWebcam] = useState(0)
    const [suporteTabet, setSuporteTabet] = useState(0)
    const [unidImagem, setUnidImagem] = useState(0)
    const [mouse, setMouse] = useState(0)
    const [notebook, setNotebook] = useState(0)
    const [gabinete, setGabinete] = useState(0)
    const [cxCabos, setCxCabos] = useState(0)
    const [observacao, setObservacao] = useState('')
    

    const handleClick = () => {
        setLoading(true)
        api.post('/plantao/salvar', {
            turno: turno,
            celular: celular,
            fone: fone,
            tablet: tablet,
            roteador: roteador,
            toner_pb: tonerPB,
            toner_colorido: tonerColorido,
            caixa_ferramentas: cxFerramentas,
            webcam: webcam,
            suporte_tablet: suporteTabet,
            unidade_imagem: unidImagem,
            mouse: mouse,
            notebook: notebook,
            gabinete: gabinete,
            caixa_cabos: cxCabos,
            observacao: observacao
        }).then(({data}) => {
            console.log(data)
            navigate('/listagem')
        }).catch((e) => {
            console.log(e.response.status)
        }).finally(()=>{
            setLoading(false)
        })
    }

    return (
        <>
            <Navegacao />
            <Container >
                <h2>Informações sobre o plantão</h2>
                <hr />
                {/* sx={{ display: 'flex' }} */}
                <form>
                    <Box >
                        <RadioGroup
                            aria-labelledby="radio-buttons-group-label"
                            defaultValue="diurno"
                            name="radio-buttons-group"
                            onChange={(e)=>{setTurno(e.target.value)}}
                            value={turno}
                        >
                            <FormControlLabel value="diurno" control={<Radio />} label="Diurno" />
                            <FormControlLabel value="noturno" control={<Radio />} label="Noturno" />
                        </RadioGroup>
                        <div >
                            <TextField
                                label="Celular"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setCelular(e.target.value)}
                                value={celular}
                            />
                            <TextField
                                label="Fone"
                                type="number"
                                sx={{margin: '10px'}}      
                                onChange={(e)=>setFone(e.target.value)}
                                value={fone}
                            />
                            <TextField
                                label="Tablet"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setTablet(e.target.value)}
                                value={tablet}
                            />
                            <TextField
                                label="Roteador"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setRoteador(e.target.value)}
                                value={roteador}
                            />
                            <TextField
                                label="Toner P/B"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setTonerPB(e.target.value)}
                                value={tonerPB}
                            />
                            <TextField
                                label="Toner colorido"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setTonerColorido(e.target.value)}
                                value={tonerColorido}
                            />
                            <TextField
                                label="Caixa de ferramentas"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setCxferramentas(e.target.value)}
                                value={cxFerramentas}
                            />
                            <TextField
                                label="Webcam"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setWebcam(e.target.value)}
                                value={webcam}
                            />
                            <TextField
                                label="Suporte de tablet"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setSuporteTabet(e.target.value)}
                                value={suporteTabet}
                            />
                            <TextField
                                label="Unidade de imagem"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setUnidImagem(e.target.value)}
                                value={unidImagem}
                            />
                            <TextField
                                label="Mouse"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setMouse(e.target.value)}
                                value={mouse}
                            />
                            <TextField
                                label="Notebook"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setNotebook(e.target.value)}
                                value={notebook}
                            />
                            <TextField
                                label="Gabinete"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setGabinete(e.target.value)}
                                value={gabinete}
                            />
                            <TextField
                                label="Caixa de cabos"
                                type="number"
                                sx={{margin: '10px'}}
                                onChange={(e)=>setCxCabos(e.target.value)}
                                value={cxCabos}
                            />
                        </div>
                        <div>
                            <TextField aria-colcount={5} 
                            multiline rows={7} fullWidth 
                            label='Observação do Plantão' 
                            sx={{marginTop: '10px', marginBottom: '10px'}}
                            onChange={(e)=>setObservacao(e.target.value)}
                            value={observacao}
                            />
                        </div>
                        <LoadingButton
                        loading={loading} 
                        color="primary" 
                        variant="contained" 
                        onClick={handleClick}>
                            Enviar
                        </LoadingButton>
                    </Box>
                </form>
            </Container>
        </>
    )
}

export default Passar