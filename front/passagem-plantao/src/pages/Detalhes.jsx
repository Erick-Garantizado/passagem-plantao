import { Box, Container, Skeleton } from '@mui/material'


const Detalhes = () => {

  return (
    <Container>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }} >
      <Skeleton
        variant="rectangular"
        width={345}
        height={200}
      />
      <Skeleton
        variant="rectangular"
        width={345}
        height={200}
      />
      <Skeleton
        variant="rectangular"
        width={345}
        height={200}
      />
    </Box>
    </Container>
  )
}

export default Detalhes