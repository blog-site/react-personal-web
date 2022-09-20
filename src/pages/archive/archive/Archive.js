import React from 'react';
import ArchiveStyle from './Archive.module.scss';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ShowArchive } from '../../../components';

function Archive() {
  let params = useParams();

  return (
    <motion.div
      className={ArchiveStyle.Archive}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ShowArchive
        slug={params.slug}
      />
    </motion.div>
  );
}

export default Archive;
