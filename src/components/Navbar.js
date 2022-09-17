import { Link, Outlet } from 'react-router-dom';
import NavbarStyle from './Navbar.module.scss';
import { motion } from 'framer-motion';

const pages = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/archives',
    title: 'Archives',
  },
  {
    link: '/about',
    title: 'About',
  }
];

function Navbar() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

function Nav() {
  return (
    <nav className={NavbarStyle.nav}>
      <ul className={NavbarStyle.ul}>
        <Pages />
      </ul>
    </nav>
  );
}

function Pages() {
  return (
    pages.map(
      (page) => (
        <motion.li
          key={page.link}
          className={NavbarStyle.li}
          whileHover={{
            scale: 1.05,
          }}
        >
          <Link to={page.link}>{page.title}</Link>
        </motion.li>
      )
    )
  );
}

export default Navbar;