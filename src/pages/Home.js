import HomeStyle from './Home.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import avatar from '../asset/avatar.jpg';

function Home() {
  return (
    <motion.div
      className={HomeStyle.Home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={HomeStyle.container}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <img src={avatar} className={HomeStyle.avatar} alt='avatar' />
        <p>
          Hi,
          <br />
          I am [name],
          <br />
          A [job name] in [company]
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Home;