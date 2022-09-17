import { archivesActionType } from '../../actions';

const initState = {
  archives: [],
  archives_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case archivesActionType.TO_INITED_STATE:
    return {
      ...state,
      archives_state: 'inited',
    };
  case archivesActionType.GET_ARCHIVES:
    return {
      ...state,
      archives_state: 'archives_fetching',
    };
  case archivesActionType.ON_GET_ARCHIVES:
    return {
      ...state,
      archives_state: 'archives_fetched',
      archives: payload,
    };
  case archivesActionType.ON_GET_ARCHIVES_FAIL:
    return {
      ...state,
      archives_state: 'archives_fetch_failed',
    };
  default:
    return state;
  }
};

export default reducer;