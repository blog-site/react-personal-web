import { archiveActionType } from '../../actions';

const initState = {
  archive: {},
  archive_state: 'init',
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
  case archiveActionType.TO_INITED_STATE:
    return {
      ...state,
      archive: {},
      archive_state: 'inited',
    };
  case archiveActionType.GET_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_fetching',
    };
  case archiveActionType.ON_GET_ARCHIVE:
    return {
      ...state,
      archive_state: `archive_fetched: ${payload.slug}`,
      archive: payload,
    };
  case archiveActionType.ON_GET_ARCHIVE_FAIL:
    return {
      ...state,
      archive_state: 'archive_fetch_failed',
    };
  case archiveActionType.POST_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_adding',
    };
  case archiveActionType.ON_POST_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_added',
    };
  case archiveActionType.ON_POST_ARCHIVE_FAIL:
    return {
      ...state,
      archive_state: 'archive_add_failed',
    };
  case archiveActionType.PATCH_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_updating',
    };
  case archiveActionType.ON_PATCH_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_updated',
    };
  case archiveActionType.ON_PATCH_ARCHIVE_FAIL:
    return {
      ...state,
      archive_state: 'archive_update_failed',
    };
  case archiveActionType.DELETE_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_removing',
    };
  case archiveActionType.ON_DELETE_ARCHIVE:
    return {
      ...state,
      archive_state: 'archive_removed',
    };
  case archiveActionType.ON_DELETE_ARCHIVE_FAIL:
    return {
      ...state,
      archive_state: 'archive_remove_failed',
    };
  default:
    return state;
  }
};

export default reducer;