import { catalogActionType } from '../../actions';

const initState = {
  catalog: [],
  catalog_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case catalogActionType.TO_INITED_STATE:
    return {
      ...state,
      catalog_state: 'inited',
    };
  case catalogActionType.GET_CATALOG:
    return {
      ...state,
      catalog_state: 'catalog_fetching',
    };
  case catalogActionType.ON_GET_CATALOG:
    return {
      ...state,
      catalog_state: 'catalog_fetched',
      catalog: payload,
    };
  case catalogActionType.ON_GET_CATALOG_FAIL:
    return {
      ...state,
      catalog_state: 'catalog_fetch_failed',
    };
  default:
    return state;
  }
};

export default reducer;