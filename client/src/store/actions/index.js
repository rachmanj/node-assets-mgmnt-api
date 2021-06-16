import {
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
  SIGN_OUT,
  GET_ASSETS_PAGINATE,
  GET_ASSET_BY_ID,
  ASSET_ADD,
  CLEAR_CURRENT_ASSET,
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

export const getAssetById = asset => ({
  type: GET_ASSET_BY_ID,
  payload: asset,
});

export const assetAdd = asset => ({
  type: ASSET_ADD,
  payload: asset,
});

export const clearCurrentAsset = () => ({
  type: CLEAR_CURRENT_ASSET,
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
