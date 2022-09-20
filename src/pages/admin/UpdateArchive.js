import UpdateArchiveStyle from './UpdateArchive.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArchiveEditor } from '../../components';

function UpdateArchive() {
  let params = useParams();
  return (
    <motion.div
      className={UpdateArchiveStyle.UpdateArchive}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ArchiveEditor slug={params.slug} />
    </motion.div>
  );
}

export default UpdateArchive;
