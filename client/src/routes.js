import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Loader from 'utils/loader';
import AuthGuard from './hoc/authGuard';

import { useDispatch, useSelector } from 'react-redux';
import { userIsAuth, userSignOut } from 'store/actions/user.actions';

import Header from 'components/navigation/header';
import Footer from 'components/navigation/footer';
import Home from 'components/home';
import RegisterLogin from 'components/auth';
import Dashboard from 'components/dashboard';
import AssetsPage from 'components/dashboard/admin/assets';
import AddAsset from 'components/dashboard/admin/assets/addedit/add';

const Routes = props => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(userSignOut());
  };

  useEffect(() => {
    dispatch(userIsAuth());
  }, [dispatch]);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header users={users} signOutUser={signOutUser} />
          <MainLayout>
            <Switch>
              <Route
                path="/assets/add_asset"
                component={AuthGuard(AddAsset)}
                exact
              />
              <Route path="/assets" component={AuthGuard(AssetsPage)} />
              <Route
                path="/dashboard"
                users={users}
                component={AuthGuard(Dashboard)}
              />
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={AuthGuard(Home)} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routes;
