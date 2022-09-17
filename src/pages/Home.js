import HomeStyle from './Home.module.scss';
import avatar from '../avatar.svg';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function Home() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  return (
    <motion.div
      className={HomeStyle.Home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={HomeStyle.container}>
        <img src={avatar} className={HomeStyle.avatar} alt='avatar' />
        <p>
          Hi,
          <br />
          I am [name],
          <br />
          A [job name] in [company]
        </p>
      </div>
    </motion.div>
  );
}

export default Home;