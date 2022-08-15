import { Link } from "react-router-dom";
function ListArchives() {
  const data = require('../../asset/archives/index.json');

  let archives = data.map(
    (archive) => (
      <Link to={`/archive/${archive.slug}`} key={archive.slug}>
        <h2>{archive.title}</h2>
      </Link>
    )
  )

  return (
    archives
  );
}

export default ListArchives;