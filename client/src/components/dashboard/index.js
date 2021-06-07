import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

const Dashboard = () => {
  const user = useSelector(state => state.users);

  return (
    <>
      <Container>
        <Typography variant="h6">
          Welcome {user.data.firstname + ' ' + user.data.lastname}
        </Typography>
      </Container>
    </>
  );
};

export default Dashboard;
