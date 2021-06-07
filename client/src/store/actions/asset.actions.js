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
