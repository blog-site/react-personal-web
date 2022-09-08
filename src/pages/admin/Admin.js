import AdminStyle from './Admin.module.scss';
import React from 'react';
import MDEditor from '@uiw/react-md-editor';

function Admin() {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className={AdminStyle.Admin}>
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}

export default Admin;
