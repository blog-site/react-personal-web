import HomeStyle from './Home.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import avatar from '../asset/avatar.jpg';

const variants = {
  init: { opacity: 0 },
  view: {
    opacity: [0, 1],
    transition: {
      duration: 0.25
    }
  },
  exit: { opacity: 0, y: 5 },
};

const variantsAvatar = {
  view: { 
    scale: [1, 2, 2, 1],
    rotate: [0, 0, 360, 360],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: {
      delay: 0.25,
      duration: 1
    }
  },
};

const variantsIntro = {
  view: {
    scale: ['20%', '100%'],
    scaleX: [0, 1],
    x: ['-10%', '0%'],
    transition: {
      delay: 1.25,
      duration: 0.25
    }
  },
};

function Home() {
  return (
    <div
      className={HomeStyle.Home}
    >
      <motion.div
        className={HomeStyle.container}
        initial={ 'init' }
        animate={ 'view' }
        exit={ 'exit' }
        variants={ variants }
      >
        <motion.img
          src={avatar}
          className={HomeStyle.avatar}
          alt='avatar'
          animate={ 'view' }
          variants={ variantsAvatar }
        />
        <motion.p
          className={HomeStyle.intro}
          animate={ 'view' }
          variants={ variantsIntro }
        >
          Hi,
          <br />
          I am Lolainta Chi,
          <br />
          A student in NYCU
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Home;