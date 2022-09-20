import AdminStyle from './Admin.module.scss';
import { motion } from 'framer-motion';

function Admin() {
  return (
    <motion.div
      className={AdminStyle.Admin}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Admin</h1>
    </motion.div>
  );
}

export default Admin;
