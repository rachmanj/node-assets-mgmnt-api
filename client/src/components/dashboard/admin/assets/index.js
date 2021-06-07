import React, { useEffect, useState, useReducer } from 'react';
import { Container, TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

import AssetsTable from './assetsTable';

import { assetsByPaginate } from 'store/actions/asset.actions';
import { useDispatch, useSelector } from 'react-redux';

const defaultValues = {
  keywords: '',
  assetName: [],
  min: 0,
  max: 5000,
  page: 1,
};

const AssetsPage = props => {
  const assets = useSelector(state => state.assets);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );

  const gotoPage = page => {
    setSearchValues({ page: page });
  };

  useEffect(() => {
    dispatch(assetsByPaginate(searchValues));
  }, [dispatch, searchValues]);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Typography
          align="center"
          variant="h4"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          Assets List
        </Typography>
        <form className="mt-5">
          <TextField
            style={{ width: '100%' }}
            name="keyowrds"
            label="Enter keywords"
            variant="outlined"
          />
        </form>
        <Button
          style={{ marginTop: '10px' }}
          variant="contained"
          color="primary"
          size="medium"
        >
          Reset Search
        </Button>
        <hr />
        <AssetsTable
          assets={assets.byPaginate}
          prev={page => gotoPage(page)}
          next={page => gotoPage(page)}
        />
      </Container>
    </>
  );
};

export default AssetsPage;
