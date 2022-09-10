import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getArchive, postArchive, patchArchive } from '../../actions';

function ArchiveEditor(props) {
  let _props = props;
  const slug = _props.slug;

  const [value, setValue] = React.useState({
    slug: 'undefined',
    title: 'undefined',
    subtitle: 'undefined',
    body: 'undefined',
    date_created: 'undefined',
    date_modified: 'undefined',
    date_published: 'undefined',
    published: true
  });
  const setBody = ((newBody) => {
    setValue({
      slug: value.slug,
      title: value.title,
      subtitle: value.subtitle,
      body: newBody,
      date_created: value.date_created,
      date_modified: value.date_modified,
      date_published: value.date_published,
      published: value.published
    });
  });
  
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
      setValue(archive);
    }
  }, [archive_state, dispatch]);

  return (
    <div>
      <form
        value={value}
        id="archiveEditorForm"
        onChange={(newValue) => setValue({
          ...value, 
          [newValue.target.name] : newValue.target.value
        })}
        onSubmit={() =>
          dispatch(patchArchive(value))
        }
      >
        <p>
          <label>slug: </label>
          <input name="slug" type="text" placeholder={value.slug} />
        </p>
        <p>
          <label>title: </label>
          <textarea name="title" type="text" placeholder={value.title} />
        </p>
        <p>
          <label>subtitle: </label>
          <textarea name="subtitle" type="text" placeholder={value.subtitle} />
        </p>
        <p>
          <label>published: </label>
          <select name="published">
            <option value={1}>true</option>
            <option value={0}>false</option>
          </select>
        </p>
        <button type="submit">
          Submit
        </button>
      </form>
      <MDEditor
        value={value.body}
        onChange={setBody}
        style={{ whiteSpace: 'pre-wrap' }}
        form="archiveEditorForm"
      />
    </div>
  );
}

export default ArchiveEditor;
