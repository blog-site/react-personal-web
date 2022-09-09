import { Link } from 'react-router-dom';
// import { GetArchives } from '../../utils/archives';

import { getArchives } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
  // let archive_list = GetArchives();

  let Archives = archive_list.map(
    (archive) => (
      <div key={archive.slug}>
        <Link to={`/archive/${archive.slug}`}>
          <h2>{archive.title}</h2>
        </Link>
        <Link to={`/admin/update-archive/${archive.slug}`}>
          Edit
        </Link>
      </div>
    )
  );

  return (
    Archives
  );
}

export default ShowArchivesEdit;