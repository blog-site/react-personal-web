import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  archiveActionType,
  onGetArchives,
  onGetArchivesFail,
  onGetArchive,
  onGetArchiveFail,
  onPostArchive,
  onPostArchiveFail,
  onPatchArchive,
  onPatchArchiveFail,
  onDeleteArchive,
  onDeleteArchiveFail,
} from '../actions';

const apiUrl = '/api/';
const archiveUrl = `${apiUrl}archive`;

const ArchivesEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.GET_ARCHIVES),
    mergeMap((action) => {
      return ajax.getJSON(archiveUrl).pipe(
        map((res) => onGetArchives(res)),
        catchError((error) => of(onGetArchivesFail(error)))
      );
    })
  );

const ArchiveEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.GET_ARCHIVE),
    mergeMap((action) => {
      return ajax.getJSON(`${archiveUrl}`).pipe(
        map((res) => onGetArchive(res)),
        catchError((error) => of(onGetArchiveFail(error)))
      );
    })
  );

const PostArchiveEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.POST_ARCHIVE),
    mergeMap((action) => {
      return ajax
        .patch(`${archiveUrl}/`, action.payload)
        .pipe(
          map((res) => onPostArchive()),
          catchError((error) => of(onPostArchiveFail(error)))
        );
    })
  );

const PatchArchiveEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.PATCH_ARCHIVE),
    mergeMap((action) => {
      return ajax
        .patch(`${archiveUrl}/${action.payload.slug}/`, action.payload)
        .pipe(
          map((res) => onPatchArchive()),
          catchError((error) => of(onPatchArchiveFail(error)))
        );
    })
  );

const DeleteArchiveEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.DELETE_ARCHIVE),
    mergeMap((action) => {
      return ajax
        .patch(`${archiveUrl}/${action.payload.slug}/`, action.payload)
        .pipe(
          map((res) => onDeleteArchive()),
          catchError((error) => of(onDeleteArchiveFail(error)))
        );
    })
  );

export default combineEpics(
  ArchivesEpic,
  ArchiveEpic,
  PostArchiveEpic,
  PatchArchiveEpic,
  DeleteArchiveEpic
);
