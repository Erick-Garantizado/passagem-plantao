import React from 'react'
import Navegacao from '../components/Navegacao'
import { Box, Checkbox, Container, FormControl, FormControlLabel, 
    FormGroup, FormLabel, Radio, RadioGroup, TextField, TextareaAutosize } from '@mui/material'

const Passar = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return (
        <>
            <Navegacao />
            <Container >
                <h1>dados</h1>
                <hr />
                {/* sx={{ display: 'flex' }} */}
                <Box >
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        defaultValue="diurno"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="diurno" control={<Radio />} label="Diurno" />
                        <FormControlLabel value="noturno" control={<Radio />} label="Noturno" />
                    </RadioGroup>
                    <TextField
                        label="Celular"
                        type="number"
                    />
                    <TextField
                        label="Fone"
                        type="number"                        
                    />
                    <TextField
                        label="Tablet"
                        type="number"                        
                    />
                    <TextField
                        label="Roteador"
                        type="number"                        
                    />
                    <TextField
                        label="Toner P/B"
                        type="number"                        
                    />
                    <TextField
                        label="Toner colorido"
                        type="number"                        
                    />
                    <TextField
                        label="Caixa de ferramentas"
                        type="number"                        
                    />
                    <TextField
                        label="Webcam"
                        type="number"                        
                    />
                    <TextField
                        label="Suporte de tablet"
                        type="number"                        
                    />
                    <TextField
                        label="Unidade de imagem"
                        type="number"                        
                    />
                    <TextField
                        label="Mouse"
                        type="number"                        
                    />
                    <TextField
                        label="Notebook"
                        type="number"                        
                    />
                    <TextField
                        label="Gabinete"
                        type="number"                        
                    />
                    <TextField
                        label="Caixa de cabos"
                        type="number"                        
                    />
                    <TextareaAutosize/>
                </Box>
                <hr />
            </Container>
        </>
    )
}

export default Passar