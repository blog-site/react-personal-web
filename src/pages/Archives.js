import React from 'react';
import ArchivesStyle from './Archives.module.scss';
import ListArchives from '../components/ListArchives';
function Archives() {
  return (
    <div className={ArchivesStyle.Archives}>
      <h2>Archives</h2>
      <div className={ArchivesStyle.Archive}>
        <ListArchives />
      </div>
    </div>
  );
}

export default Archives;