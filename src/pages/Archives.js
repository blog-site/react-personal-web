import React from 'react';
import { Link } from "react-router-dom";
import ArchivesStyle from './Archives.module.scss';
function Archive() {
  const data = require('../asset/archives/index.json');

  return (
    <div className={ArchivesStyle.Archives}>
      <h2>Archives</h2>
      <div className={ArchivesStyle.Archive}>
        <Link to="/archive/title1">
          <h2>{data[0].title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Archive;