// Types
import { DecalType } from "../config/types";

// Components
import CustomButton from "./CustomButton";

interface AIPickerProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: any) => void;
}

const AIPicker: React.FC<AIPickerProps> = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outlined"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outlined"
              title="AI Logo"
              handleClick={() => handleSubmit(DecalType.Logo)}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit(DecalType.Full)}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;

// Example prompt 1: Design a simple, modern logo icon using geometric shapes and a minimalistic color scheme, without any text or lettering.
// Example prompt 2: Creating a gradient pattern that goes from blue to red
// Example prompt 3: Create a logo with a whimsical treehouse nestled among tall trees.
// Example prompt 4: A surreal underwater forest with floating jellyfish lanterns.

// A prompt to generate prompts for Dall-E: I'm going to create a logo image for my t-shirts. Can you recommend a few prompts to generate images via dall-e?
