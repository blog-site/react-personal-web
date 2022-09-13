import React from 'react';
import { useEffect } from 'react';
import ShowArchiveStyle from './ShowArchive.module.scss';
import Markdown from '../shared/Markdown.component';

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
      <Markdown
        className={ShowArchiveStyle.Content}
      >
        # Loading
      </Markdown>
    );
  }
  const content = `
  **Below me will be displayed as a block:**
  $$
  Block Math
  $$
  **Next to me will be displayed as inline ->** $Inline Math$
  `;
  return (
    <Markdown
      className={ShowArchiveStyle.Body}
    >
      {content}
    </Markdown>
  );
}

export default ShowArchive;
