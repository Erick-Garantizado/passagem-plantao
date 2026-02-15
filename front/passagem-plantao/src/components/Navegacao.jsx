import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { AccountCircle } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';


const Navegacao = () => {
  const { logout } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    if (!token) {
      setUsuarioAtual('');
      setPermissao(null);
      return;
    }
    api.get('plantao/usuario/atual')
    .then( ( {data} ) => {
      setUsuarioAtual(data.usuario.nome)
      setPermissao(data.usuario.permissao)
    })
    .catch((e) => {
      setUsuarioAtual(null);
      setPermissao(null);
    })
  }, [localStorage.getItem('user-token')])
  
  const [permissao, setPermissao] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [usuarioAtual, setUsuarioAtual] = useState()
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePassar = () => {
    handleCloseNavMenu()
    navigate('/passagem')
  }

  const handleReceber = () => {
    handleCloseNavMenu()
    navigate('/listagem')
  }

  const handleMeus = () => {
    handleCloseNavMenu()
    navigate('/meusplantoes')
  }

  const handlePerfil = () => {
    handleCloseNavMenu()
    navigate('/perfil')
  }
  
  const handleCadastro = () => {
    handleCloseNavMenu()
    navigate('/cadastro')
  }
  
  const handleDashboard = () => {
    handleCloseNavMenu()
    navigate('/area')
  }

  const handleSair = () => {
    logout()
    navigate('/')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>     
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handlePassar}>
                <Typography sx={{ textAlign: 'center' }}> Passar plantão </Typography>
              </MenuItem>
              <MenuItem onClick={handleReceber}>
                <Typography sx={{ textAlign: 'center' }}> Receber plantão </Typography>
              </MenuItem>
              <MenuItem onClick={handleMeus}>
                <Typography sx={{ textAlign: 'center' }}> Meus plantões </Typography>
              </MenuItem>
              <MenuItem onClick={handleDashboard}>
                <Typography sx={{ textAlign: 'center' }}> Dashboard </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handlePassar}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Passar plantão
            </Button>
            <Button
              onClick={handleReceber}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Receber plantão
            </Button>  
            <Button
              onClick={handleMeus}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Meus plantões
            </Button>            
            <Button
              onClick={handleDashboard}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Dashboard
            </Button>            
          </Box>
          <Box >
            <Typography variant='p'fontSize='1.5rem'>
              {usuarioAtual}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton color="inherit" onClick={handleOpenUserMenu} sx={{ p: 2 }} size="large" >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
              {permissao === 0 && (
                <MenuItem onClick={handleCadastro}>
                  <Typography sx={{ textAlign: 'center' }}>Cadastrar usuário</Typography>
                </MenuItem>
              )}
              <MenuItem onClick={handlePerfil}>
                <Typography sx={{ textAlign: 'center' }}>Perfil</Typography>
              </MenuItem>
              <MenuItem onClick={handleSair}>
                <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navegacao