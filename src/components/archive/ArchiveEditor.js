import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getArchive, postArchive, patchArchive } from '../../actions';

function ArchiveEditor(props) {
  let _props = props;
  const slug = _props.slug;

  const [value, setValue] = React.useState('# Loading...');
  
  const archive = useSelector(
    (state) => state.archive.archive
  );
  const archive_state = useSelector(
    (state) => state.archive.archive_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (archive_state === 'init') {
      dispatch(getArchive({ slug: slug }));
    }
    else if (('slug' in archive) === false) {
      dispatch(getArchive({ slug: slug }));
    }
    else if (archive.slug !== slug) {
      dispatch(getArchive({ slug: slug }));
    }
    else {
      setValue(archive.body);
    }
  }, [archive_state, dispatch]);

  return (
    <MDEditor
      value={value}
      onChange={setValue}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
}

export default ArchiveEditor;
