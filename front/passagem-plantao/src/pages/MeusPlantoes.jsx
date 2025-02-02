import { useState, useEffect } from 'react'
import api from '../services/api'

const MeusPlantoes = () => {
  useEffect(() => {
    api.get('/')
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>MeusPlantoes</div>
  )
}

export default MeusPlantoes