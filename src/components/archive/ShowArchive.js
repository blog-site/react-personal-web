import React from 'react';
import ArchiveStyle from './Archive.module.scss';
import ReactMarkdown from 'react-markdown';
import { GetArchive } from '../../utils/archives';
function ShowArchive(props) {
  let _props = props;
  const [content, setContent] = React.useState();
  let slug = _props.slug;
  var archive = GetArchive(slug);
  const file = require(`../../asset/archives/contents/${archive.contentDir}/content.md`);
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
      setContent(text);
    });

  return (
    <div className={ArchiveStyle.Archive}>
      <h1>{archive.title}</h1>
      <ReactMarkdown
        className={ArchiveStyle.Content}
      >
        {content || '# Loading...'}
      </ReactMarkdown>
    </div>
  );
}

export default ShowArchive;
