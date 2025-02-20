import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getMoveTopMobileHead = (state) => state.moveTopMobileHead;
const getMoveTopMobileText = (state) => state.moveTopMobileText;
const getMoveAllTopMobileText = (state) => state.moveAllTopMobileText;
const getMoveTopMobileButtonOK = (state) => state.moveTopMobileButtonOK;
const getMoveTopMobileButtonCancel = (state) => state.moveTopMobileButtonCancel;
const getMobileThinConditionsOfInstruction = (state) => state.mobileThinConditionsOfInstruction;
const getMobileThinSubmitButtonText = (state) => state.mobileThinSubmitButtonText;
const getMobileThinHelpModalHead = (state) => state.mobileThinHelpModalHead;
const getMobileThinHelpModalText = (state) => state.mobileThinHelpModalText;
const getMobileThinPreventNavModalHead = (state) => state.mobileThinPreventNavModalHead;
const getMobileThinPreventNavModalText = (state) => state.mobileThinPreventNavModalText;
const getMobileThinProcessCompleteMessage = (state) => state.mobileThinProcessCompleteMessage;
const getMobileGuidanceModalRight1Header = (state) => state.mobileGuidanceModalRight1Header;
const getMobileGuidanceModalRight1Text = (state) => state.mobileGuidanceModalRight1Text;
const getMobileGuidanceModalRight2Header = (state) => state.mobileGuidanceModalRight2Header;
const getMobileGuidanceModalRight2Text = (state) => state.mobileGuidanceModalRight2Text;
const getMobileGuidanceModalLeft1Header = (state) => state.mobileGuidanceModalLeft1Header;
const getMobileGuidanceModalLeft1Text = (state) => state.mobileGuidanceModalLeft1Text;
const getMobileGuidanceModalLeft2Header = (state) => state.mobileGuidanceModalLeft2Header;
const getMobileGuidanceModalLeft2Text = (state) => state.mobileGuidanceModalLeft2Text;
const getMobileThinScrollBottomModalHead = (state) => state.mobileThinScrollBottomModalHead;
const getMobileThinScrollBottomModalText = (state) => state.mobileThinScrollBottomModalText;

const MobileRefineEvaluationsTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const moveTopMobileHead = useStore(getMoveTopMobileHead);
  const moveTopMobileText = useStore(getMoveTopMobileText);
  const moveAllTopMobileText = useStore(getMoveAllTopMobileText);
  const moveTopMobileButtonOK = useStore(getMoveTopMobileButtonOK);
  const moveTopMobileButtonCancel = useStore(getMoveTopMobileButtonCancel);
  const mobileThinConditionsOfInstruction = useStore(getMobileThinConditionsOfInstruction);
  const mobileThinSubmitButtonText = useStore(getMobileThinSubmitButtonText);
  const mobileThinHelpModalHead = useStore(getMobileThinHelpModalHead);
  const mobileThinHelpModalText = useStore(getMobileThinHelpModalText);
  const mobileThinPreventNavModalHead = useStore(getMobileThinPreventNavModalHead);
  const mobileThinPreventNavModalText = useStore(getMobileThinPreventNavModalText);
  const mobileThinProcessCompleteMessage = useStore(getMobileThinProcessCompleteMessage);
  const mobileGuidanceModalRight1Header = useStore(getMobileGuidanceModalRight1Header);
  const mobileGuidanceModalRight1Text = useStore(getMobileGuidanceModalRight1Text);
  const mobileGuidanceModalRight2Header = useStore(getMobileGuidanceModalRight2Header);
  const mobileGuidanceModalRight2Text = useStore(getMobileGuidanceModalRight2Text);
  const mobileGuidanceModalLeft1Header = useStore(getMobileGuidanceModalLeft1Header);
  const mobileGuidanceModalLeft1Text = useStore(getMobileGuidanceModalLeft1Text);
  const mobileGuidanceModalLeft2Header = useStore(getMobileGuidanceModalLeft2Header);
  const mobileGuidanceModalLeft2Text = useStore(getMobileGuidanceModalLeft2Text);
  const mobileThinScrollBottomModalHead = useStore(getMobileThinScrollBottomModalHead);
  const mobileThinScrollBottomModalText = useStore(getMobileThinScrollBottomModalText);

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };
  const handleShowDefaults = (e) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e) => {
    console.log("handleTextChange", e.target.value);
    setText(e.target.name, e.target.value);
  };

  const handleClearAll = (e) => {
    clearSection(e.target.id);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[1200px] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>8. Mobile Refine Evaluations Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="footerDef"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button id="footerClear" className="bg-slate-300 p-2 rounded-md" onClick={handleClearAll}>
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md"
            id="footerImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-1. Confirm Move Modal Title"
          name="moveTopMobileHead"
          value={moveTopMobileHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-2. Confirm Move Modal Text"
          name="moveTopMobileText"
          value={moveTopMobileText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-3. Move All To Top Message"
          name="moveAllTopMobileText"
          value={moveAllTopMobileText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-4. Move All To Top Modal OK Button"
          name="moveTopMobileButtonOK"
          value={moveTopMobileButtonOK}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-5. Move All To Top Modal Cancel Button"
          name="moveTopMobileButtonCancel"
          value={moveTopMobileButtonCancel}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-6. Instructions for Moving Statements"
          name="mobileThinConditionsOfInstruction"
          value={mobileThinConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-7. Submit Button Text"
          name="mobileThinSubmitButtonText"
          value={mobileThinSubmitButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-8. Help Modal Title"
          name="mobileThinHelpModalHead"
          value={mobileThinHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-9. Help Modal Text"
          name="mobileThinHelpModalText"
          height={150}
          value={mobileThinHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-10. Prevent Navigation Modal Title"
          name="mobileThinPreventNavModalHead"
          value={mobileThinPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-11. Prevent Navigation Modal Text"
          name="mobileThinPreventNavModalText"
          height={150}
          value={mobileThinPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-12. Refinement Complete Message"
          name="mobileThinProcessCompleteMessage"
          value={mobileThinProcessCompleteMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-13. Guidance Modal Title - Right Side 1"
          name="mobileGuidanceModalRight1Header"
          value={mobileGuidanceModalRight1Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-14. Guidance Modal Text - Right Side 1"
          name="mobileGuidanceModalRight1Text"
          height={150}
          value={mobileGuidanceModalRight1Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-15. Guidance Modal Title - Right Side 2"
          name="mobileGuidanceModalRight2Header"
          value={mobileGuidanceModalRight2Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-16 Guidance Modal Text - Right Side 2"
          name="mobileGuidanceModalRight2Text"
          height={150}
          value={mobileGuidanceModalRight2Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-17. Guidance Modal Title - Right Side 2"
          name="mobileGuidanceModalLeft1Header"
          value={mobileGuidanceModalLeft1Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-18. Guidance Modal Text - Left Side 1"
          name="mobileGuidanceModalLeft1Text"
          height={150}
          value={mobileGuidanceModalLeft1Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-19. Guidance Modal Title - Left Side 2"
          name="mobileGuidanceModalLeft2Header"
          value={mobileGuidanceModalLeft2Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-20. Guidance Modal Text - Left Side 2"
          name="mobileGuidanceModalLeft2Text"
          height={150}
          value={mobileGuidanceModalLeft2Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="8-21. Must View Bottom of List Modal Title"
          name="mobileThinScrollBottomModalHead"
          value={mobileThinScrollBottomModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-22. Must View Bottom of List Modal Text"
          name="mobileThinScrollBottomModalText"
          height={150}
          value={mobileThinScrollBottomModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { MobileRefineEvaluationsTextInput };
