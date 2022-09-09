import { Link } from 'react-router-dom';
import { GetArchives } from '../../utils/archives';

function ShowArchivesEdit() {
  let archives = GetArchives();

  let Archives = archives.map(
    (archive) => (
      <div key={archive.slug}>
        <Link to={`/archive/${archive.slug}`}>
          <h2>{archive.title}</h2>
        </Link>
        <Link to={`/admin/update-archive/${archive.slug}`}>
          Edit
        </Link>
      </div>
    )
  );

  return (
    Archives
  );
}

export default ShowArchivesEdit;