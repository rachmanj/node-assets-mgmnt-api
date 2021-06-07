import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ users, signOutUser }) => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar styles={{ flex: '1' }}>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
            Pratasaba Resort
          </Typography>
          {users.auth ? (
            <>
              <Link to="/assets" style={{ marginRight: '50px' }}>
                <Typography style={{ color: 'white' }}>Assets</Typography>
              </Link>
              <Button
                variant="primary"
                style={{ color: 'white' }}
                onClick={() => signOutUser()}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
