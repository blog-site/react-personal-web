import { Link, Outlet } from 'react-router-dom';
import NavbarStyle from './Navbar.module.scss';

function Navbar() {
  return (
    <div>
      <nav className={NavbarStyle.nav}>
        <ul className={NavbarStyle.ul}>
          <li className={NavbarStyle.li}>
            <Link to='/'>Home</Link>
          </li>
          <li className={NavbarStyle.li}>
            <Link to='/archives'>Archives</Link>
          </li>
          <li className={NavbarStyle.li}>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;