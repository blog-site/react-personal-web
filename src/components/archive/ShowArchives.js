import { Link } from 'react-router-dom';
import { GetArchives } from '../../utils/archives';

function ShowArchives() {
  let archives = GetArchives();

  let Archives = archives.map(
    (archive) => (
      <Link to={`/archive/${archive.slug}`} key={archive.slug}>
        <h2>{archive.title}</h2>
      </Link>
    )
  );

  return (
    Archives
  );
}

export default ShowArchives;