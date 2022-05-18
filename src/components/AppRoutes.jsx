import { Route, Routes } from "react-router-dom";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";

const drawerWidth = 240;

import Home from "./components/home/Index";
const AppRoutes = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>Nemrod</Toolbar>
        {/* <Divider /> */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link>Accueil</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default AppRoutes;
