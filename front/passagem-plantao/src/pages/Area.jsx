import Navegacao from '../components/Navegacao'
import { Container } from '@mui/material'


const Area = () => {

  return (
    <>
      <Navegacao />
      <Container sx={{ width: '100vw', height: '93vh' }} >
        <div className="corpo" ></div>
      </Container>
    </>
  )
}

export default Area