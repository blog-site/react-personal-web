import ArchiveEditorForm from './ArchiveEditorForm';

function ArchiveEditor(props) {
  let _props = props;
  return (
    <ArchiveEditorForm
      value={_props.value}
      onChange={_props.setValue}
    />
  );
}

export default ArchiveEditor;
