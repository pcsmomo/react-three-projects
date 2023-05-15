import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import {
  Editor,
  EditorTab,
  Filter,
  FilterTab,
  DecalType,
  DecalStateProperty,
} from "./types";

export const editorTabs: EditorTab[] = [
  {
    name: Editor.ColorPicker,
    icon: swatch,
  },
  {
    name: Editor.FilePicker,
    icon: fileIcon,
  },
  {
    name: Editor.AIPicker,
    icon: ai,
  },
];

export const filterTabs: FilterTab[] = [
  {
    name: Filter.LogoShirt,
    icon: logoShirt,
  },
  {
    name: Filter.StylishShirt,
    icon: stylishShirt,
  },
];

export const decalTypes = {
  [DecalType.Logo]: {
    stateProperty: DecalStateProperty.LogoDecal,
    filterTab: Filter.LogoShirt,
  },
  [DecalType.Full]: {
    stateProperty: DecalStateProperty.FullDecal,
    filterTab: Filter.StylishShirt,
  },
};
