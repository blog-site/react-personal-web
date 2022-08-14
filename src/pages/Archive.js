import React from 'react';
import { useParams } from 'react-router-dom';
import ArchiveStyle from './Archive.module.scss';
import ReactMarkdown from 'react-markdown';
function Archive(props) {
  let params = useParams();
  console.log(`slug: ${params.slug}`);
  const data = require('../asset/archives/index.json');
  const [content, setContent] = React.useState();
  const file = require(`../asset/archives/content/${data[0].contentFile}`);
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
      setContent(text);
    });

  return (
    <div className={ArchiveStyle.Archive}>
      <h2>Archive</h2>
      <ReactMarkdown children={content || '# Loading...'} />
    </div>
  );
}

export default Archive;