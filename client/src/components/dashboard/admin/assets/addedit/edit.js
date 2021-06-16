import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { errorHelper } from 'utils/tools';
import Loader from 'utils/loader';
import { validation, formValues, getValuesToEdit } from './formValues';

import { useDispatch, useSelector } from 'react-redux';
import { assetEdit, getAssetById } from 'store/actions/asset.actions';
import { clearCurrentAsset } from 'store/actions/index';

import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';

const EditAsset = props => {
  const [values, setValues] = useState(formValues);
  const [loading, setLoading] = useState(false);
  const assets = useSelector(state => state.assets);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: values,
    validationSchema: validation,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const handleSubmit = values => {
    setLoading(true);
    dispatch(assetEdit(values, props.match.params.id));
    // dispatch(dispatch(clearCurrentAsset()));
  };

  useEffect(() => {
    if (notifications) {
      setLoading(false);
    }
  }, [notifications]);

  useEffect(() => {
    const param = props.match.params.id;
    if (param) {
      dispatch(getAssetById(param));
    }
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (assets && assets.byId) {
      setValues(getValuesToEdit(assets.byId));
    }
  }, [assets]);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentAsset());
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container style={{ marginTop: '20px' }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              name="assetName"
              label="Enter asset name"
              variant="outlined"
              {...formik.getFieldProps('assetName')}
              {...errorHelper(formik, 'assetName')}
            />
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <Typography variant="h6">Select Category</Typography>
              <Select
                name="category"
                {...formik.getFieldProps('category')}
                error={
                  formik.errors.category && formik.touched.category
                    ? true
                    : false
                }
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Peralatan">Peralatan</MenuItem>
                <MenuItem value="Kendaraan">Kendaraan</MenuItem>
                <MenuItem value="Bangunan">Bangunan</MenuItem>
                <MenuItem value="Utilities">Utilities</MenuItem>
              </Select>
              {formik.errors.category && formik.touched.category ? (
                <FormHelperText error={true}>
                  {formik.errors.category}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Divider />
            <Button
              style={{ marginTop: '10px' }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save Asset
            </Button>
          </form>
        </Container>
      )}
    </>
  );
};

export default EditAsset;
