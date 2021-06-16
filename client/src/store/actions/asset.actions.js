import * as actions from './index';
import axios from 'axios';

import { getAuthHeader } from '../../utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const assetsByPaginate = args => {
  return async dispatch => {
    try {
      const assets = await axios.post(`/api/assets/paginate/all`, args);
      dispatch(actions.assetsByPaginate(assets.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const assetAdd = data => {
  return async dispatch => {
    try {
      const asset = await axios.post(`/api/assets`, data, getAuthHeader());

      dispatch(actions.assetAdd(asset.data));
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const getAssetById = id => {
  return async dispatch => {
    try {
      const asset = await axios.get(`/api/assets/${id}`);
      dispatch(actions.getAssetById(asset.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const assetEdit = (values, id) => {
  return async dispatch => {
    try {
      await axios.patch(`/api/assets/${id}`, values, getAuthHeader());
      dispatch(actions.successGlobal('Update success !!'));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
