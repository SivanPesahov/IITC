import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, Route, Routes, Outlet } from "react-router-dom";


const pages = ['Home', 'Todo Page', 'Create Todo'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function TopNavLink(props) {
    const { href, children } = props;
    return (
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "salmon" } : {};
        }}
        to={href}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <AppBar position="static" sx ={{backgroundColor: 'green'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <TopNavLink href= '/home' >Home</TopNavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <TopNavLink href= '/todos/list' >Todo list</TopNavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <TopNavLink href= 'todos/list/create' >Create task</TopNavLink>

              </Button>
  
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
