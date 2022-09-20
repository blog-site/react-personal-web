import NoMatchStyle from './NoMatch.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NoMatch() {
  return (
    <motion.div
      className={NoMatchStyle.NoMatch}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </motion.div>
  );
}

export default NoMatch;