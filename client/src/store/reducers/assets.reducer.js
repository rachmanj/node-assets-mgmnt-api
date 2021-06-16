import {
  GET_ASSETS_PAGINATE,
  ASSET_ADD,
  GET_ASSET_BY_ID,
  CLEAR_CURRENT_ASSET,
} from '../types';

export default function assetsReducer(state = {}, action) {
  switch (action.type) {
    case ASSET_ADD:
      return { ...state, lastAdded: action.payload };
    case GET_ASSETS_PAGINATE:
      return { ...state, byPaginate: action.payload };
    case GET_ASSET_BY_ID:
      return { ...state, byId: action.payload };
    case CLEAR_CURRENT_ASSET:
      return { ...state, byId: '' };
    default:
      return state;
  }
}
