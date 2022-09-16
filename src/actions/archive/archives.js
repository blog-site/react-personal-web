export const archivesActionType = {
  TO_INITED_STATE: 'To Inited State',
  GET_ARCHIVES: 'Get Archives',
  ON_GET_ARCHIVES: 'On Get Archives',
  ON_GET_ARCHIVES_FAIL: 'On Get Archives Failed',
};

export const toArchivesInitedState = () => {
  return {
    type: archivesActionType.TO_INITED_STATE,
  };
};

export const getArchives = () => {
  return {
    type: archivesActionType.GET_ARCHIVES,
  };
};

export const onGetArchives = (payload) => {
  return {
    type: archivesActionType.ON_GET_ARCHIVES,
    payload,
  };
};

export const onGetArchivesFail = (error) => {
  return {
    type: archivesActionType.ON_GET_ARCHIVES_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};
