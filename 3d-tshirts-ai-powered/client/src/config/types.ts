export enum Editor {
  ColorPicker = "colorpicker",
  FilePicker = "filepicker",
  AIPicker = "aipicker",
}

export type EditorTab = {
  name: Editor;
  icon: string;
};
