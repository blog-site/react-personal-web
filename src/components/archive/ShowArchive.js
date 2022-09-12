import React from 'react';
import { useEffect } from 'react';
import ShowArchiveStyle from './ShowArchive.module.scss';
import ReactMarkdown from 'react-markdown';

import { useDispatch, useSelector } from 'react-redux';
import { getArchive } from '../../actions';

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
      dispatch(getArchive({ slug: slug }));
    }
    else if (('slug' in archive) === false) {
      dispatch(getArchive({ slug: slug }));
    }
    else if (archive.slug !== slug) {
      dispatch(getArchive({ slug: slug }));
    }
  }, [archive_state, dispatch]);

  return (
    <div className={ShowArchiveStyle.Archive}>
      <h1>{archive.title}</h1>
      
      <Archive body={archive.body} />
    </div>
  );
}

function Archive(props){
  let _props = props;
  var body = _props.body;
  
  if (!body) {
    return (
      <ReactMarkdown
        className={ShowArchiveStyle.Content}
      >
        # Loading
      </ReactMarkdown>
    );
  }

  

  return (
    <ReactMarkdown
      className={ShowArchiveStyle.Body}
    >
      {body}
    </ReactMarkdown>
  );
}

export default ShowArchive;
