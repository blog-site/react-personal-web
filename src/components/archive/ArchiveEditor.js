import MDEditor from '@uiw/react-md-editor';
function ArchiveEditor(props) {
  let _props = props;
  return (
    <MDEditor
      value={_props.value}
      onChange={_props.setValue}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
}

export default ArchiveEditor;
