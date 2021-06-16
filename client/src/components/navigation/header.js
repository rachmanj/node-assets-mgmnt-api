import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}));

const Header = ({ users, signOutUser }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar styles={{ flex: '1' }}>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
            Pratasaba Resort
          </Typography>
          {users.auth ? (
            <>
              <Link style={{ marginRight: '50px' }}>
                <Button variant="primary" style={{ color: 'white' }}>
                  Maintenance
                </Button>
              </Link>
              <Link to="/assets" style={{ marginRight: '50px' }}>
                <Button variant="primary" style={{ color: 'white' }}>
                  Assets
                </Button>
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
      <div className={classes.offset} />
    </div>
  );
};

export default Header;
