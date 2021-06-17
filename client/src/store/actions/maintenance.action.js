import * as actions from './index';
import axios from 'axios';

import { getAuthHeader } from '../../utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const maintenanceAdd = data => {
  return async dispatch => {
    try {
      const maintenance = await axios.post(
        `/api/maintenance`,
        data,
        getAuthHeader()
      );

      dispatch(actions.maintenanceAdd(maintenance.data));
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
