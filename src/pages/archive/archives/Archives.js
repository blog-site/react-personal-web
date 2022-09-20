import React from 'react';
import ArchivesStyle from './Archives.module.scss';
import { motion } from 'framer-motion';
import { ShowArchives } from '../../../components';

function Archives() {
  return (
    <motion.div
      className={ArchivesStyle.Archives}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Archives</h1>
      <div className={ArchivesStyle.Archive}>
        <ShowArchives />
      </div>
    </motion.div>
  );
}

export default Archives;