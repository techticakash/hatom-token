import React from 'react';
import { ContainerImage, AppBtn, NavbarLink, Tagline, Coin } from './style';
import logo from '../../assets/resources/assets-per-section/section1/logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CoinImage from '../../assets/resources/assets-per-section/section1/coin.svg';

export const Hero = () => {
  const navItems = ['Markets', 'Governance', 'Prices', 'Docs'];

  return (
    <ContainerImage>
      <AppBar
        component="nav"
        color="transparent"
        position="relative"
        sx={{ padding: '35px 122px 0 106px', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{
              flexGrow: 0.5,
              textAlign: 'left',
              display: { xs: 'none', sm: 'flex' },
              fontSize: '18.7727px',
              letterSpacing: '0.02em',
              lineHeight: '21px',
              fontWeight: 700
            }}>
            <img src={logo} alt="logo" style={{ marginRight: '7.46px' }} />
            hatom
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  padding: '6px 10px',
                  fontWeight: 700,
                  lineHeight: '24px'
                }}>
                {item}
              </Button>
            ))}
            <NavbarLink>
              <span className="linktext">Hatom Token</span>
              <FiberManualRecordIcon fontSize="small" />
            </NavbarLink>
          </Box>
          <Typography
            component="div"
            color="white"
            sx={{
              flexGrow: 0.5,
              textAlign: 'right',
              display: { xs: 'none', sm: 'block' }
            }}>
            <AppBtn>App</AppBtn>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ paddingTop: '37px' }}>
        <Typography
          variant="h1"
          component="div"
          color="white"
          sx={{
            fontFamily: 'Rubik',
            fontSize: '80px',
            letterSpacing: '0.06em',
            lineHeight: '80px',
            fontWeight: 700,
            textShadow: '5px 1px 1px #3d906a'
          }}>
          Hatom Token
        </Typography>
        <Tagline>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tagline>
        <Coin>
          <img src={CoinImage} alt="coin" />
        </Coin>
      </Box>
    </ContainerImage>
  );
};
