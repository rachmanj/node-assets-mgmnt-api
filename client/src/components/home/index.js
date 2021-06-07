import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.pallete.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Home
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
