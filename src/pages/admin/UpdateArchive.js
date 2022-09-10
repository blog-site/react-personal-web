import UpdateArchiveStyle from './UpdateArchive.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArchiveEditor } from '../../components';

function UpdateArchive() {
  let params = useParams();
  const slug = params.slug;
  return (
    <div className={UpdateArchiveStyle.UpdateArchive}>
      <ArchiveEditor slug={slug} />
    </div>
  );
}

export default UpdateArchive;
