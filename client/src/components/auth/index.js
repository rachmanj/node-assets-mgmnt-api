import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from 'utils/loader';
import { errorHelper } from 'utils/tools';

import { useDispatch, useSelector } from 'react-redux';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { userRegister, userSignIn } from 'store/actions/user.actions';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterLogin = props => {
  const classes = useStyles();
  const [formType, setFormType] = useState(false);
  const [loading, setLoading] = useState(false);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: 'dalmi@sandbox.com',
      password: '12345678',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Sorry the email is required')
        .email('Invalid email address'),
      password: Yup.string().required('Sorry the password is required'),
    }),
    onSubmit: values => {
      setLoading(true);
      handleSubmit(values);
    },
  });

  const toggleFormType = () => {
    setFormType(!formType);
  };

  const handleSubmit = values => {
    if (formType) {
      dispatch(userRegister(values));
    } else {
      dispatch(userSignIn(values));
    }
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/dashboard');
    } else {
      setLoading(false);
    }
  }, [notifications, props.history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            {formType ? (
              <Typography component="h1" variant="h5">
                Register New User
              </Typography>
            ) : (
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            )}

            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                style={{ width: '100%' }}
                variant="outlined"
                margin="normal"
                label="Email Address"
                name="email"
                {...formik.getFieldProps('email')}
                {...errorHelper(formik, 'email')}
              />
              <TextField
                style={{ width: '100%' }}
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                {...formik.getFieldProps('password')}
                {...errorHelper(formik, 'password')}
              />
              <Button
                type="submit"
                style={{ width: '100%' }}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {formType ? 'Submit' : 'Sign In'}
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => toggleFormType()}
                  >
                    {formType
                      ? 'Already have account? Sign In'
                      : "Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default RegisterLogin;
