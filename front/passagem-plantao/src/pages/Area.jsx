import React from 'react'
import  Navegacao  from '../components/Navegacao'
import stilo from "./Area.css"
import { Container } from '@mui/material'


const Area = () => {
  
  return (
    <>
    <Navegacao/>
    <Container>
        <div className="corpo" ></div>
    </Container>
    </>
  )
}

export default Area