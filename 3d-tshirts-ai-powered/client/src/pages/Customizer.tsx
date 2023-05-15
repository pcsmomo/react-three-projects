import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { editorTabs, filterTabs, decalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

// Types
import {
  Editor,
  Filter,
  DecalType,
  FilterTab,
  DecalStateProperty,
} from "../config/types";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState<Blob>();

  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activateEditorTab, setActivateEditorTab] = useState<Editor | null>(
    null
  );
  const [activateFilterTab, setActivateFilterTab] = useState({
    [Filter.LogoShirt]: true,
    [Filter.StylishShirt]: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activateEditorTab) {
      case Editor.ColorPicker:
        return <ColorPicker />;
      case Editor.FilePicker:
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case Editor.AIPicker:
        return <AIPicker />;
      default:
        return null;
    }
  };

  const handleActiveFilterTab = (tabName: Filter) => {
    switch (tabName) {
      case Filter.LogoShirt:
        state.isLogoTexture = !activateFilterTab[tabName];
        break;
      case Filter.StylishShirt:
        state.isFullTexture = !activateFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
  };

  const handleDecals = (type: DecalType, result: string) => {
    const decalType = decalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activateFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type: DecalType) => {
    if (!file) return;

    reader(file).then((result) => {
      if (typeof result === "string") {
        handleDecals(type, result);
        setActivateEditorTab(null);
      }
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {editorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActivateEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {filterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={false}
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
