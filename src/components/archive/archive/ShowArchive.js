import React, { useState } from 'react';
import { useEffect } from 'react';
import ShowArchiveStyle from './ShowArchive.module.scss';
import { Link } from 'react-router-dom';
import Markdown from '../../shared/Markdown.component';

import { useDispatch, useSelector } from 'react-redux';
import { checkAuthenticate } from '../../../actions/auth';
import { getArchive, toArchiveInitedState } from '../../../actions';
import CSRFToken from '../../../components/auth/CSRFToken';

import NoMatch from '../../../pages/NoMatch';

function ShowArchive(props) {
  const [csrfToken, setCsrfToken] = useState('');
  let _props = props;
  let slug = _props.slug;
  
  const archive = useSelector(
    (state) => state.archive.archive
  );
  const archive_state = useSelector(
    (state) => state.archive.archive_state
  );

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const isAuthenticated_state = useSelector(
    (state) => state.auth.isAuthenticated_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated === 'init') {
      fetchToken();
      dispatch(checkAuthenticate(csrfToken));
    }
    if (archive_state === 'archive_fetch_failed'){
      console.log('state failed');
    }
    else if (archive_state === 'init' || archive_state === 'inited'){
      dispatch(getArchive({ slug: slug }));
    }
    else if (archive_state !== `archive_fetched: ${slug}` && archive_state !== 'archive_fetching'){
      dispatch(toArchiveInitedState());
    }
  }, [archive_state, isAuthenticated_state, dispatch]);

  async function fetchToken() {
    let token = CSRFToken();
    setCsrfToken(token);
  }
  
  if (archive_state === 'archive_fetch_failed') {
    return <NoMatch />;
  }

  return (
    <div className={ShowArchiveStyle.Archive}>
      <h1>{archive.title}</h1>
      {isAuthenticated && 
      <Link to={`/admin/update-archive/${archive.slug}`}>
        <p>Edit</p>
      </Link>
      }
      
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
