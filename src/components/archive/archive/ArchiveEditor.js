import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getArchive, postArchive, patchArchive, toArchiveInitedState } from '../../../actions';

import NoMatch from '../../../pages/NoMatch';

function ArchiveEditor(props) {
  let _props = props;
  const _slug = _props.slug;

  const [value, setValue] = React.useState({
    slug: 'undefined',
    title: 'undefined',
    body: 'undefined',
    date_created: 'undefined',
    date_modified: 'undefined',
    date_published: 'undefined',
    published: true
  });

  const {
    slug,
    title,
    body,
    date_created,
    date_modified,
    date_published,
    published,
  } = value;
  
  const setBody = ((newBody) => {
    setValue({
      slug: value.slug,
      title: value.title,
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
    console.log(archive_state);
    if (archive_state === 'archive_fetch_failed'){
      console.log('state failed');
    }
    else if (archive_state === 'init' || archive_state === 'inited'){
      dispatch(getArchive({ slug: _slug }));
    }
    else if (archive_state !== `archive_fetched: ${_slug}` && archive_state !== 'archive_fetching'){
      dispatch(toArchiveInitedState());
    }
    else if (archive_state === `archive_fetched: ${_slug}`){
      setValue(archive);
    }
  }, [archive_state, dispatch]);
  
  if (archive_state === 'archive_fetch_failed') {
    return <NoMatch />;
  }

  return (
    <div>
      <h1>Edit Archive</h1>
      <form
        value={value}
        id='archiveEditorForm'
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
          <input name='slug' type='text' placeholder={slug} />
        </p>
        <p>
          <label>title: </label>
          <textarea name='title' type='text' placeholder={title} />
        </p>
        <p>
          <label>published: </label>
          <select name='published'>
            <option value={1}>true</option>
            <option value={0}>false</option>
          </select>
        </p>
        <button type='submit'>
          Submit
        </button>
      </form>
      <MDEditor
        value={body}
        onChange={setBody}
        style={{ whiteSpace: 'pre-wrap' }}
        form='archiveEditorForm'
      />
    </div>
  );
}

export default ArchiveEditor;
