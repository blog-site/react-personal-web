import MDEditor from '@uiw/react-md-editor';

function ArchiveEditorForm(props) {
  let _props = props;
  return (
    <MDEditor
      value={_props.value}
      onChange={_props.setValue}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
}

export default ArchiveEditorForm;
