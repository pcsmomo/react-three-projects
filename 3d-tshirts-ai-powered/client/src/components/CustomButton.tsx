import { FC } from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

type ButtonType = "filled" | "outlined";

interface CustomButtonProps {
  type: ButtonType;
  title: string;
  handleClick?: () => void;
  customStyles?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  type,
  title,
  handleClick,
  customStyles,
}) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: ButtonType) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outlined") {
      return {
        border: `1px solid ${snap.color}`,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
