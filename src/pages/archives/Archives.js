import React from 'react';
import ArchivesStyle from './Archives.module.scss';
import { ListArchives } from '../../utils/archives';
function Archives() {
  return (
    <div className={ArchivesStyle.Archives}>
      <h1>Archives</h1>
      <div className={ArchivesStyle.Archive}>
        <ListArchives />
      </div>
    </div>
  );
}

export default Archives;