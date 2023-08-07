interface AIPickerProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: any) => void;
}

const AIPicker: React.FC<AIPickerProps> = () => {
  return <div>AIPicker</div>;
};

export default AIPicker;
