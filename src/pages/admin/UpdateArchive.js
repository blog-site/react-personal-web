import UpdateArchiveStyle from './UpdateArchive.module.scss';
import React from 'react';
import MDEditor from '@uiw/react-md-editor';

function UpdateArchive() {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className={UpdateArchiveStyle.UpdateArchive}>
      <MDEditor
        value={value}
        onChange={setValue}
        style={{ whiteSpace: 'pre-wrap' }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </div>
  );
}

export default UpdateArchive;
