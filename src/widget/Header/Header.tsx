import React from 'react';
import { AppBar, Toolbar, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'pages/config';
import Logo from 'app/assets/Logo.png';
import style from './Header.module.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={ROUTES.home}>
            <img src={Logo} alt="logo" className={style.header_logo} />
          </Link>

          <Stack className={style.nav_container}>
            <Link to={ROUTES.home} className={style.nav_link}>
              Home
            </Link>
            <a href="#exercises" className={style.nav_link}>
              Exercises
            </a>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
