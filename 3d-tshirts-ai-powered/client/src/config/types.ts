export enum Editor {
  ColorPicker = "colorpicker",
  FilePicker = "filepicker",
  AIPicker = "aipicker",
}

export type EditorTab = {
  name: Editor;
  icon: string;
};

export enum Filter {
  LogoShirt = "logoShirt",
  StylishShirt = "stylishShirt",
}

export type FilterTab = {
  name: Filter;
  icon: string;
};
