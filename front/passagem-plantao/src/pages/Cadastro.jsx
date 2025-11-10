import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/api";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, 
  Checkbox, Select, MenuItem, Button, FormHelperText } from "@mui/material";
import Navegacao from "../components/Navegacao";

// Esquema de validação com Yup
const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  matricula: yup.string().required("A matricula é obrigatória"),
  profissao: yup.string().required("A profissão é obrigatória"),
});

const Cadastro = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      matricula: "",
      profissao: "",
      permissao: ""
    },
  });

  const onSubmit = (data) => {
    data.permissao = parseInt(data.permissao)

    api.post('plantao/usuario/criar', {
      nome: data.nome,
      email: data.email,
      matricula: data.matricula,
      permissao: data.permissao,
      funcao: data.profissao
    })
    .then(()=>{alert("Usuario criado!")})
    .catch((e)=>{console.log(e)})
  };

  return (
    <>
      <Navegacao />
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
        {/* Nome */}
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Nome" fullWidth variant="standard"
            margin="normal" error={!!errors.nome} helperText={errors.nome?.message} />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="E-mail" fullWidth variant="standard"
            margin="normal" error={!!errors.email} helperText={errors.email?.message} />
          )}
        />
        
        {/* Matricula */}
        <Controller
          name="matricula"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Matricula" fullWidth variant="standard"
            margin="normal" error={!!errors.email} helperText={errors.email?.message} />
          )}
        />

        {/* Gênero (Radio) */}
        <FormControl margin="normal" error={!!errors.permissao}>
          <FormLabel>Permissão</FormLabel>
          <Controller
            name="permissao"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel value='0' control={<Radio />} label="Administrador" />
                <FormControlLabel value='1' control={<Radio />} label="Usuario" />
              </RadioGroup>
            )}
          />
          <FormHelperText>{errors.permissao?.message}</FormHelperText>
        </FormControl>

        {/* Profissao (Select) */}
        <FormControl variant="standard" fullWidth margin="normal" error={!!errors.profissao}>
          <FormLabel>Profissão</FormLabel>
          <Controller
            name="profissao"
            control={control}
            render={({ field }) => (
              <Select {...field} displayEmpty>
                <MenuItem value="medico">Médico(a)</MenuItem>
                <MenuItem value="enfermeiro">Enfermeiro(a)</MenuItem>
                <MenuItem value="tec_enfermagem">Técnico(a) em enfermagem</MenuItem>
              </Select>
            )}
          />
          <FormHelperText>{errors.profissao?.message}</FormHelperText>
        </FormControl>

        {/* Botão de Envio */}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}      >
          Enviar
        </Button>
      </form>
    </>
  );
}


export default Cadastro