import { archiveActionType } from '../actions';

const initState = {
  archive_list: [],
  archive_list_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case archiveActionType.TO_INITED_STATE:
    return {
      ...state,
      archive_list_state: 'inited',
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
    };
  case archiveActionType.ON_GET_ARCHIVES_FAIL:
    return {
      ...state,
      archive_list_state: 'archives_fetch_failed',
    };
  case archiveActionType.GET_ARCHIVE:
    return {
      ...state,
      archive_list_state: 'archive_fetching',
    };
  case archiveActionType.ON_GET_ARCHIVE:
    return {
      ...state,
      archive_list_state: 'archive_fetched',
    };
  case archiveActionType.ON_GET_ARCHIVE_FAIL:
    return {
      ...state,
      archive_list_state: 'archive_fetch_failed',
    };
  case archiveActionType.POST_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_adding',
    };
  case archiveActionType.ON_POST_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_added',
    };
  case archiveActionType.ON_POST_ARCHIVES_FAIL:
    return {
      ...state,
      archive_list_state: 'archives_add_failed',
    };
  case archiveActionType.PATCH_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_updating',
    };
  case archiveActionType.ON_PATCH_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_updated',
    };
  case archiveActionType.ON_PATCH_ARCHIVES_FAIL:
    return {
      ...state,
      archive_list_state: 'archives_update_failed',
    };
  case archiveActionType.DELETE_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_removing',
    };
  case archiveActionType.ON_DELETE_ARCHIVES:
    return {
      ...state,
      archive_list_state: 'archives_removed',
    };
  case archiveActionType.ON_DELETE_ARCHIVES_FAIL:
    return {
      ...state,
      archive_list_state: 'archives_remove_failed',
    };
  }
};

export default reducer;