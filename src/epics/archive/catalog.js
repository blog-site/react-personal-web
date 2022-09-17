import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  catalogActionType,
  onGetCatalog,
  onGetCatalogFail,
} from '../../actions';

const apiUrl = '/api/';
const catalogUrl = `${apiUrl}catalog/`;
const catalogViewUrl = `${catalogUrl}view/`;

const CatalogEpic = (action$) =>
  action$.pipe(
    ofType(catalogActionType.GET_CATALOG),
    mergeMap((action) => {
      return ajax.getJSON(catalogViewUrl).pipe(
        map((res) => onGetCatalog(res)),
        catchError((error) => of(onGetCatalogFail(error)))
      );
    })
  );

export default combineEpics(
  CatalogEpic,
);
