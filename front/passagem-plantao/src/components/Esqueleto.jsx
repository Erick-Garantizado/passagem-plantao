import { Box, Container, Skeleton } from "@mui/material";


const Esqueleto = () => {
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        // width: '100%'
      }} >
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={345}
          height={150}
        />
      ))}
      </Box>
    </Container>
    );
};


export default Esqueleto;
