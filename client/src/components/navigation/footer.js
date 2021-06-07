import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <>
      <Box style={{ marginTop: '20px' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          {new Date().getFullYear()}
          {'.'}
          <Link color="primary" href="#">
            Dev. by: IT Dept
          </Link>{' '}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
