import { AppBar, IconButton, Menu, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

const Navegacao = () => {
    

  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
                
                <MenuIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Navegacao