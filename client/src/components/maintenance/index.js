import React, { useEffect, useState } from 'react';
import { Container, Button, Typography } from '@material-ui/core';

import MaintenanceTable from './maintenanceTable';

const MaintenancePage = () => {
  return (
    <>
      <Container>
        <div className="page_title_wrapper">
          <Typography variant="h4" align="center">
            Maintenance List
          </Typography>
        </div>
        <MaintenanceTable />
      </Container>
    </>
  );
};

export default MaintenancePage;
