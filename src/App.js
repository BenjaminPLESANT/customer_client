import './App.css';
import { Box, Drawer, AppBar, Toolbar, List, Typography, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home/Index'

const drawerWidth = 240;
const navItems = [
  { label: 'Accueil', to: '/app', Icon: Home },

]

function App() {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Gestion clients
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          Nemrod
        </Toolbar>
        {/* <Divider /> */}
        <List>
          {['Accueil', 'Clients',].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <Routes>
                  <Route path='/' element={<Home />} />


                </Routes> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );

}

export default App;

