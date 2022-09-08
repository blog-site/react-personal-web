import WriteStyle from './Write.module.scss';
import React from 'react';
import MDEditor from '@uiw/react-md-editor';

function Write() {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className={WriteStyle.Write}>
      <MDEditor
        value={value}
        onChange={setValue}
        style={{ whiteSpace: 'pre-wrap' }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </div>
  );
}

export default Write;
