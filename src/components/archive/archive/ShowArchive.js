import React from 'react';
import { useEffect } from 'react';
import ShowArchiveStyle from './ShowArchive.module.scss';
import Markdown from '../../shared/Markdown.component';

import { useDispatch, useSelector } from 'react-redux';
import { getArchive, toArchiveInitedState } from '../../../actions';

import NoMatch from '../../../pages/NoMatch';

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
    if (archive_state === 'archive_fetch_failed'){
      console.log('state failed');
    }
    else if (archive_state === 'init' || archive_state === 'inited'){
      dispatch(getArchive({ slug: slug }));
    }
    else if (archive_state !== `archive_fetched: ${slug}` && archive_state !== 'archive_fetching'){
      dispatch(toArchiveInitedState());
    }
  }, [archive_state, dispatch]);
  
  if (archive_state === 'archive_fetch_failed') {
    return <NoMatch />;
  }

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
  return (
    <Markdown
      className={ShowArchiveStyle.Body}
    >
      {body}
    </Markdown>
  );
}

export default ShowArchive;
