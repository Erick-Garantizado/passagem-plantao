// import { Box, Container, FormLabel, TextField } from '@mui/material'
// import React from 'react'
// import "./Area.css"
// import { FormControl } from '@mui/base'


// const Cadastro = () => {
//   return (
//     <Container sx={{ width:'100vw', height:'89vh', backgroundColor: 'white', mt:3,
//         display:'flex', flexDirection:'column', alignItems: 'center', boxShadow:10 }}>
//       <Box>
//         <FormLabel></FormLabel>
//         <FormControl>
//           <TextField id="nome" label="Nome" variant="standard" />
//           <TextField id="setor" label="Setor" variant="standard" />
//           <TextField id="matricula" label="Matricula" variant="standard" />
//         </FormControl>
//       </Box>
//     </Container>
//   )
// }
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
    console.log("Dados do formulário:", data);
    alert("Formulário enviado com sucesso!");
  };

  const handleClick = () => {
    alert('enviado')
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
      {/* <FormControl variant="standard" fullWidth margin="normal" error={!!errors.pais}>
        <FormLabel>País</FormLabel>
        <Controller
          name="pais"
          control={control}
          render={({ field }) => (
            <Select {...field} displayEmpty>
              <MenuItem value="">Selecione um país</MenuItem>
              <MenuItem value="brasil">Brasil</MenuItem>
              <MenuItem value="portugal">Portugal</MenuItem>
              <MenuItem value="eua">Estados Unidos</MenuItem>
            </Select>
          )}
        />
        <FormHelperText>{errors.pais?.message}</FormHelperText>
      </FormControl> */}

      {/* Botão de Envio */}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}      >
        Enviar
      </Button>
    </form>
  );
}


export default Cadastro