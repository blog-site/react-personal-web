import AboutStyle from './About.module.scss';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className={AboutStyle.About}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>About</h1>
      <div>
        Content
      </div>
    </motion.div>
  );
}

export default About;
