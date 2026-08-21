import { Box } from "@mui/material";
import semRegistro from '../assets/images/sem-registros.png'

const SemRegistro = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 5
      }}
    >
      <img
        src={semRegistro}
        alt="Sem registros de plantão"
        style={{
          width: '400px',
          maxWidth: '90%'
        }}
      />
    </Box>
  );
}

export default SemRegistro;
