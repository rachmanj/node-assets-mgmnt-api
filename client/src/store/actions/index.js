import {
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
  SIGN_OUT,
  GET_ASSETS_PAGINATE,
  ASSET_ADD,
} from '../types';

// USERS
export const userAuthenticate = user => ({
  type: AUTH_USER,
  payload: user,
});

export const userSignOut = () => ({
  type: SIGN_OUT,
});

/// ASSETS
export const assetsByPaginate = assets => ({
  type: GET_ASSETS_PAGINATE,
  payload: assets,
});

export const assetAdd = asset => ({
  type: ASSET_ADD,
  payload: asset,
});

/// NOTIFICATIONS
export const errorGlobal = msg => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = msg => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};
