export const catalogActionType = {
  TO_CATALOG_INITED_STATE: 'To Catalog Inited State',
  GET_CATALOG: 'Get Catalog',
  ON_GET_CATALOG: 'On Get Catalog',
  ON_GET_CATALOG_FAIL: 'On Get Catalog Failed',
};

export const toCatalogInitedState = () => {
  return {
    type: catalogActionType.TO_CATALOG_INITED_STATE,
  };
};

export const getCatalog = () => {
  return {
    type: catalogActionType.GET_CATALOG,
  };
};

export const onGetCatalog = (payload) => {
  return {
    type: catalogActionType.ON_GET_CATALOG,
    payload,
  };
};

export const onGetCatalogFail = (error) => {
  return {
    type: catalogActionType.ON_GET_CATALOG_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};
