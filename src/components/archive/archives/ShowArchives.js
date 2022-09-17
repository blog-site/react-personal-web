import ShowArchivesStyle from './ShowArchives.module.scss';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getArchives } from '../../../actions';

function ShowArchivesEdit() {
  const archives = useSelector(
    (state) => state.archive.archives
  );
  const archives_state = useSelector(
    (state) => state.archive.archives_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (archives_state === 'init') {
      dispatch(getArchives());
    }
  }, [archives_state, dispatch]);
  console.log(`archives: ${archives}`);
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