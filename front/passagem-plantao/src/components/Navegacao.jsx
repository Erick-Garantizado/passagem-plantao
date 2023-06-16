import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navegacao = () => {
  // variaveis
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  // metodos
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handlePassar = () => {
    handleClose()
    navigate('/passagem')
  }
  const handleListar = () => {
    handleClose()
    navigate('/listagem')
  }
  const handleSair = () => {
    localStorage.removeItem('user-token')
    navigate('/')
  }
  
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handlePassar}>Passar plantão</MenuItem>
          <MenuItem onClick={handleListar} divider>Receber Plantão</MenuItem>
          <MenuItem onClick={handleSair}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navegacao