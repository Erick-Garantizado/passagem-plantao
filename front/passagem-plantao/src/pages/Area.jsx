import Navegacao from '../components/Navegacao'

import { Container, Grid, Paper, Typography } from "@mui/material";

function Card({ title, value }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
}

const Area = () => {

  return (
    <>
      <Navegacao />
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card title="Criticos" value="25" />
          </Grid>

          <Grid item xs={12} md={4}>
            <Card title="Pendentes" value="2" />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card title="Total" value="30" />
          </Grid>      
        </Grid>
      </Container>
    </>
  )
}

export default Area