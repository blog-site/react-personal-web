import React from 'react';
import ArchivesStyle from './Archives.module.scss';
import { ShowArchives } from '../../components';
function Archives() {
  return (
    <div className={ArchivesStyle.Archives}>
      <h1>Archives</h1>
      <div className={ArchivesStyle.Archive}>
        <ShowArchives />
      </div>
    </div>
  );
}

export default Archives;