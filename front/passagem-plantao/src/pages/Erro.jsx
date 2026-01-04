import { Box, Button, Typography } from "@mui/material"; 
import { useNavigate } from "react-router-dom"; 


const BACKGROUND_IMAGE = "https://cdn.vectorstock.com/i/500p/45/29/login-access-denied-error-message-vector-58014529.jpg";

const AccessDeniedPage = () => {
  const navigate = useNavigate();
  localStorage.removeItem('user-token')


  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", px: 2, textAlign: "center",
        bgcolor: "#ffffffff",
      }}
    >
      <Box component="img" src={ BACKGROUND_IMAGE } alt="Acesso Negado"
        sx={{ maxWidth: 500, width: "100%", mb: 4 }}
      />
      <Typography variant="h4" gutterBottom>
        Acesso Negado
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Você não tem permissão para acessar esta página.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Voltar para a Página Inicial
      </Button>
    </Box>
  );
};

export default AccessDeniedPage;
