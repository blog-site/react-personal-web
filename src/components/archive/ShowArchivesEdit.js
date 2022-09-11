import ShowArchivesEditStyle from './ShowArchivesEdit.module.scss';

import { Link } from 'react-router-dom';

import { getArchives } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import moment from 'moment';

function ShowArchivesEdit() {
  const archive_list = useSelector(
    (state) => state.archive.archive_list
  );
  const archive_list_state = useSelector(
    (state) => state.archive.archive_list_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (archive_list_state === 'init') {
      dispatch(getArchives());
    }
  }, [archive_list_state, dispatch]);

  return (
    <Archives archive_list={archive_list} />
  );
}

function Archives(props) {
  let _props = props;
  let archive_list = _props.archive_list;
  if (Object.keys(archive_list).length === 0) {
    return [];
  }
  return (
    <div className={ShowArchivesEditStyle.Archives}>
      {
        archive_list.map(
          (archive) => (
            <Archive key={archive.slug} archive={archive} />
          )
        )
      }
    </div>
  );
}

function Archive(props) {
  let _props = props;
  let archive = _props.archive;
  var date_published = moment(archive.date_published).format('YYYY-MM-DD');
  return (
    <div className={ShowArchivesEditStyle.Archive}>
      <div className={ShowArchivesEditStyle.ArchiveLine}>
        <Link to={`/archive/${archive.slug}`}>
          <h2>{archive.title}</h2>
        </Link>
        <Link to={`/admin/${archive.slug}/update`}>
          <p>Edit</p>
        </Link>
      </div>
      <div className={ShowArchivesEditStyle.ArchiveLine}>
        <p></p>
        <p>published on: {date_published}</p>
      </div>
    </div>
  );
}

export default ShowArchivesEdit;