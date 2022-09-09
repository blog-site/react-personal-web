import AdminStyle from './Admin.module.scss';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className={AdminStyle.Admin}>
      <h1>Admin</h1>
      <Link to={'/admin/update-archive'} key="updateArchive">
        <h2>Create an archive</h2>
      </Link>
    </div>
  );
}

export default Admin;
