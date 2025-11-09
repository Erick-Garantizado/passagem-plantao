import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/api";
import { 
  TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, 
  Checkbox, Select, MenuItem, Button, FormHelperText 
} from "@mui/material";

// Esquema de validação com Yup
const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  genero: yup.string().required("Escolha um gênero"),
});

const Cadastro = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      genero: "",
    },
  });

  const onSubmit = (data) => {
    api.post('/create')
    // nome
    // funcao
    // matricula
    // email
  };

  const handleClick = () => {
    api('enviado')
  }

  return (
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
      <FormControl margin="normal" error={!!errors.genero}>
        <FormLabel>Gênero de nasc.</FormLabel>
        <Controller
          name="genero"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
              <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
            </RadioGroup>
          )}
        />
        <FormHelperText>{errors.genero?.message}</FormHelperText>
      </FormControl>

      {/* Interesses (Checkbox) */}
      {/* <FormControl margin="normal" error={!!errors.interesses}>
        <FormLabel>Interesses</FormLabel>
        <Controller
          name="interesses"
          control={control}
          render={({ field }) => (
            <>
              <FormControlLabel control={<Checkbox onChange={e => field.onChange(e.target.checked ? [...field.value, "Música"] : field.value.filter(v => v !== "Música"))} />} label="Música" />
              <FormControlLabel control={<Checkbox onChange={e => field.onChange(e.target.checked ? [...field.value, "Esportes"] : field.value.filter(v => v !== "Esportes"))} />} label="Esportes" />
              <FormControlLabel control={<Checkbox onChange={e => field.onChange(e.target.checked ? [...field.value, "Tecnologia"] : field.value.filter(v => v !== "Tecnologia"))} />} label="Tecnologia" />
            </>
          )}
        />
        <FormHelperText>{errors.interesses?.message}</FormHelperText>
      </FormControl> */}

      {/* País (Select) */}
      <FormControl variant="standard" fullWidth margin="normal" error={!!errors.pais}>
        <FormLabel>Profissão</FormLabel>
        <Controller
          name="profissao"
          control={control}
          render={({ field }) => (
            <Select {...field} displayEmpty>
              <MenuItem value="">Selecione uma profissão</MenuItem>
              <MenuItem value="medico">Médico</MenuItem>
              <MenuItem value="enfermeiro">Enfermeiro</MenuItem>
              <MenuItem value="tec_enfermagem">Técnico em enfermagem</MenuItem>
            </Select>
          )}
        />
        <FormHelperText>{errors.pais?.message}</FormHelperText>
      </FormControl>

      {/* Botão de Envio */}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}      >
        Enviar
      </Button>
    </form>
  );
}


export default Cadastro