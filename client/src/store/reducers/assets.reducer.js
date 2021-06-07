import { GET_ASSETS_PAGINATE, ASSET_ADD } from '../types';

export default function assetsReducer(state = {}, action) {
  switch (action.type) {
    case ASSET_ADD:
      return { ...state, lastAdded: action.payload };
    case GET_ASSETS_PAGINATE:
      return { ...state, byPaginate: action.payload };
    default:
      return state;
  }
}
