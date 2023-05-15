import { ChangeEvent } from "react";

// Types
import { DecalType } from "../config/types";

import CustomButton from "./CustomButton";

interface FilePickerProps {
  file?: Blob;
  // setFile: React.Dispatch<React.SetStateAction<Blob | undefined>>;
  setFile: (file: Blob) => void;
  readFile: (type: DecalType) => void;
}

const FilePicker: React.FC<FilePickerProps> = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files![0])
          }
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === undefined ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outlined"
          title="Logo"
          handleClick={() => readFile(DecalType.Logo)}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile(DecalType.Full)}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
