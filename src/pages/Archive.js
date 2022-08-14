import ArchiveStyle from './Archive.module.scss';
import ReactMarkdown from 'react-markdown'
function Archive() {
  return (
    <div className={ArchiveStyle.Archive}>
      <h2>Archive</h2>
      <ReactMarkdown children={'# This is a header\n\nAnd this is a paragraph'} />
    </div>
  );
}

export default Archive;