import AdminStyle from './Admin.module.scss';
import { ShowArchivesEdit } from '../../components';

function Admin() {
  return (
    <div className={AdminStyle.Admin}>
      <h1>Admin</h1>
      <ShowArchivesEdit />
    </div>
  );
}

export default Admin;
