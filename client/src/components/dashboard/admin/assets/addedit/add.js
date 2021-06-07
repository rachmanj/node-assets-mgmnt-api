import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { useFormik } from 'formik';
import { errorHelper } from 'utils/tools';
import Loader from 'utils/loader';

import { useDispatch, useSelector } from 'react-redux';
import { assetAdd } from 'store/actions/asset.actions';

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

const AddAsset = props => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      assetName: '',
      category: '',
    },
    validationSchema: Yup.object({
      assetName: Yup.string().required('This field is required'),
      category: Yup.string().required('This field isrequired'),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const handleSubmit = values => {
    setLoading(true);
    dispatch(assetAdd(values));
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/assets');
    }
    if (notifications && notifications.error) {
      setLoading(false);
    }
  }, [notifications, props.history]);

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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Peralatan">
                  <em>Peralatan</em>
                </MenuItem>
                <MenuItem value="Kendaraan">
                  <em>Kendaraan</em>
                </MenuItem>
                <MenuItem value="Bangunan">
                  <em>Bangunan</em>
                </MenuItem>
                <MenuItem value="Utilities">
                  <em>Utilities</em>
                </MenuItem>
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

export default AddAsset;
