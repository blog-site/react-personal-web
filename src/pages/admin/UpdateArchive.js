import UpdateArchiveStyle from './UpdateArchive.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArchiveEditorForm } from '../../components';

function UpdateArchive() {
  let params = useParams();
  const slug = params.slug;
  const [value, setValue] = React.useState(`**Hello world!!!${slug}**`);
  return (
    <div className={UpdateArchiveStyle.UpdateArchive}>
      <ArchiveEditorForm
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default UpdateArchive;
