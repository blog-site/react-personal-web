import React from 'react';
import ShowArchiveStyle from './ShowArchive.module.scss';
import ReactMarkdown from 'react-markdown';

import { getArchive } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ShowArchive(props) {

  let _props = props;
  let slug = _props.slug;
  
  const archive = useSelector(
    (state) => state.archive.archive
  );
  const archive_state = useSelector(
    (state) => state.archive.archive_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (archive_state === 'init') {
      console.log(1);
      dispatch(getArchive({ slug: slug }));
    }
    else if ((slug in archive) == false) {
      console.log(2);
      dispatch(getArchive({ slug: slug }));
    }
    else if (archive.slug !== slug) {
      console.log(3);
      dispatch(getArchive({ slug: slug }));
    }
  }, [archive_state, dispatch]);
  // console.log(archive);

  return (
    <div className={ShowArchiveStyle.Archive}>
      <h1>{archive.title}</h1>
      <ReactMarkdown
        className={ShowArchiveStyle.Content}
      >
        {archive.body || '# Loading...'}
      </ReactMarkdown>
    </div>
  );
}

export default ShowArchive;
