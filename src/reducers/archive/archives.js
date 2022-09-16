import { archiveActionType } from '../../actions';

const initState = {
  archives: [],
  archives_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case archiveActionType.TO_INITED_STATE:
    return {
      ...state,
      archives_state: 'inited',
    };
  case archiveActionType.GET_ARCHIVES:
    return {
      ...state,
      archives_state: 'archives_fetching',
    };
  case archiveActionType.ON_GET_ARCHIVES:
    return {
      ...state,
      archives_state: 'archives_fetched',
      archives: payload,
    };
  case archiveActionType.ON_GET_ARCHIVES_FAIL:
    return {
      ...state,
      archives_state: 'archives_fetch_failed',
    };
  default:
    return state;
  }
};

export default reducer;