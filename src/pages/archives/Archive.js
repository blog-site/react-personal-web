import React from 'react';
import { useParams } from 'react-router-dom';
import ArchiveStyle from './Archive.module.scss';
import { ShowArchive } from '../../components';

function Archive() {
  let params = useParams();
  const [content, setContent] = React.useState();

  return (
    <div className={ArchiveStyle.Archive}>
      <ShowArchive
        content = {content}
        setContent = {setContent}
        slug={params.slug}
      />
    </div>
  );
}

export default Archive;
