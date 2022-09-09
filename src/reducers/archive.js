import { archiveActionType } from '../actions';

const initState = {
  archive_list: [],
  archive: [],
  archive_list_state: 'init',
  archive_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case archiveActionType.TO_INITED_STATE:
    return {
      ...state,
      archive_list_state: 'inited',
      archive_state: 'init',
    };
  case archiveActionType.GET_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_fetching',
    };
  case archiveActionType.ON_GET_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_fetched',
      archive_list: payload,
    };
  case archiveActionType.ON_GET_ARCHIVES_FAIL:
    return {
      ...state,
      archive_list_state: 'archives_fetch_failed',
    };
  case archiveActionType.GET_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_fetching',
    };
  case archiveActionType.ON_GET_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_fetched',
      archive: payload,
    };
  case archiveActionType.ON_GET_ARCHIVE_FAIL:
    return {
      ...state,
      archive_state: 'archive_fetch_failed',
    };
  case archiveActionType.POST_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_adding',
    };
  case archiveActionType.ON_POST_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_added',
    };
  case archiveActionType.ON_POST_ARCHIVES_FAIL:
    return {
      ...state,
      archive_state: 'archive_add_failed',
    };
  case archiveActionType.PATCH_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_updating',
    };
  case archiveActionType.ON_PATCH_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_updated',
    };
  case archiveActionType.ON_PATCH_ARCHIVES_FAIL:
    return {
      ...state,
      archive_state: 'archive_update_failed',
    };
  case archiveActionType.DELETE_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_removing',
    };
  case archiveActionType.ON_DELETE_ARCHIVES:
    return {
      ...state,
      archive_state: 'archive_removed',
    };
  case archiveActionType.ON_DELETE_ARCHIVES_FAIL:
    return {
      ...state,
      archive_state: 'archive_remove_failed',
    };
  default:
    return state;
  }
};

export default reducer;