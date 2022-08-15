import React from 'react';
import { useParams } from 'react-router-dom';
import ArchiveStyle from './Archive.module.scss';
import ReactMarkdown from 'react-markdown';
import { GetArchive } from '../utils/archives';
function Archive(props) {
  let params = useParams();
  const [content, setContent] = React.useState();
  var archive = GetArchive(params.slug);
  const file = require(`../asset/archives/content/${archive.contentFile}`);
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
      setContent(text);
    });

  return (
    <div className={ArchiveStyle.Archive}>
      <h1>{archive.title}</h1>
      <ReactMarkdown className={ArchiveStyle.Content} children={content || '# Loading...'} />
    </div>
  );
}

export default Archive;