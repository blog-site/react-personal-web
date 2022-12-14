import ShowArchivesEditStyle from './ShowArchivesEdit.module.scss';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getArchives, toArchivesInitedState } from '../../../actions';

import moment from 'moment';

function ShowArchivesEdit() {
  const archives = useSelector(
    (state) => state.archives.archives
  );
  const archives_state = useSelector(
    (state) => state.archives.archives_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (archives_state === 'archives_fetch_failed'){
      console.log('state failed');
    }
    else if (archives_state === 'init' || archives_state === 'inited') {
      dispatch(getArchives());
    }
    else if (archives_state !== 'archives_fetched' && archives_state !== 'archives_fetching'){
      dispatch(toArchivesInitedState());
    }
  }, [archives_state, dispatch]);

  return (
    <Archives archives={archives} />
  );
}

function Archives(props) {
  let _props = props;
  let archives = _props.archives;
  if (archives === undefined) {
    return [];
  }
  if (Object.keys(archives).length === 0) {
    return [];
  }
  return (
    <div className={ShowArchivesEditStyle.Archives}>
      {
        archives.map(
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
        <Link to={`/admin/update-archive/${archive.slug}`}>
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