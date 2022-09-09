import React from 'react';
import { useParams } from 'react-router-dom';
import ArchiveStyle from './Archive.module.scss';
import { ShowArchive } from '../../components';

function Archive() {
  let params = useParams();

  return (
    <div className={ArchiveStyle.Archive}>
      <ShowArchive
        slug={params.slug}
      />
    </div>
  );
}

export default Archive;
