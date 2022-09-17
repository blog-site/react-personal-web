import ShowArchivesStyle from './ShowArchives.module.scss';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getArchives, toArchivesInitedState } from '../../../actions';

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
    archives instanceof Array ?
      archives.map(
        (archive) => (
          <div key={archive.slug}>
            <Link to={`/archive/${archive.slug}`}>
              <h2>{archive.title}</h2>
            </Link>
          </div>
        )
      ) :
      []
  );
}

export default ShowArchivesEdit;