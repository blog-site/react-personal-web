import { useEffect, useState } from 'react';
import ShowArchivesStyle from './ShowArchives.module.scss';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { checkAuthenticate } from '../../../actions/auth';
import { getArchives, toArchivesInitedState } from '../../../actions';
import CSRFToken from '../../../components/auth/CSRFToken';

import moment from 'moment';

function ShowArchives() {
  const [csrfToken, setCsrfToken] = useState('');
  const archives = useSelector(
    (state) => state.archives.archives
  );
  const archives_state = useSelector(
    (state) => state.archives.archives_state
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
  }, [isAuthenticated_state, dispatch]);

  async function fetchToken() {
    let token = CSRFToken();
    setCsrfToken(token);
  }

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
    <Archives
      archives={archives}
      isAuthenticated={isAuthenticated}
    />
  );
}

function Archives(props) {
  let _props = props;
  let archives = _props.archives;
  let isAuthenticated = _props.isAuthenticated;
  if (archives === undefined) {
    return [];
  }
  if (Object.keys(archives).length === 0) {
    return [];
  }
  return (
    <div className={ShowArchivesStyle.Archives}>
      {
        archives.map(
          (archive) => (
            <Archive
              key={archive.slug}
              archive={archive}
              isAuthenticated={isAuthenticated} />
          )
        )
      }
    </div>
  );
}

function Archive(props) {
  let _props = props;
  let archive = _props.archive;
  let isAuthenticated = _props.isAuthenticated;
  var date_published = moment(archive.date_published).format('YYYY-MM-DD');
  return (
    <motion.div
      className={ShowArchivesStyle.Archive}
      animate={{ opacity: [0, 100], backdropFilter: ['blur(0px) contrast(100%)', 'blur(33px) contrast(80%)'] }}
      whileHover={{ scale: 1.01 }}
      exit={{ opacity: 0, y: 5 }}
    >
      <div className={ShowArchivesStyle.ArchiveLine}>
        <Link to={`/archive/${archive.slug}`}>
          <h2>{archive.title}</h2>
        </Link>
        {isAuthenticated && 
        <Link to={`/admin/update-archive/${archive.slug}`}>
          <p>Edit</p>
        </Link>
        }
      </div>
      <div className={ShowArchivesStyle.ArchiveLine}>
        <p></p>
        <p>published on: {date_published}</p>
      </div>
    </motion.div>
  );
}

export default ShowArchives;