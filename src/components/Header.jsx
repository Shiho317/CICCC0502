import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RefreshIcon from '@mui/icons-material/Refresh';

const Header = () => {

  return (
    <AppBar position="static" color='primary'>
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: 'flex' }}
          >
            React MatTable CRUD Example
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: 'flex', alignItems: 'center'}}
          >
            Reload data:
            <RefreshIcon sx={{cursor: 'pointer'}}/>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;