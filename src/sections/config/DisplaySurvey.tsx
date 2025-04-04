import { useRef } from "react";
import SurveyTextElement from "./SurveyTextElement";
import SurveyTextAreaElement from "./SurveyTextAreaElement";
import SurveyRadioElement from "./SurveyRadioElement";
import SurveyDropdownElement from "./SurveyDropdownElement";
import SurveyCheckboxElement from "./SurveyCheckboxElement";
import SurveyRating2Element from "./SurveyRating2Element";
import SurveyRating5Element from "./SurveyRating5Element";
import SurveyRating10Element from "./SurveyRating10Element";
import SurveyLikertElement from "./SurveyLikertElement";
import SurveyInformationElement from "./SurveyInformationElement";
import { v4 as uuid } from "uuid";
import { useStore } from "../../globalState/useStore";
import UpArrows from "../../assets/images/upArrows.svg";
import DownArrows from "../../assets/images/downArrows.svg";
import TrashCan from "../../assets/images/trashCan.svg";
import EditIcon from "../../assets/images/editIcon.svg";
import { DeleteSurveyItemModal } from "./DeleteSurveyItemModal";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const getSurveyQuestionsArray = (state) => state.surveyQuestionsArray;
const getSetSurveyQuestionsArray = (state) => state.setSurveyQuestionsArray;
const getSetSurveyQuestionType = (state) => state.setSurveyQuestionType;
const getSetSurveyAnswerRequired = (state) => state.setSurveyAnswerRequired;
const getSetSurveyQuestionLabel = (state) => state.setSurveyQuestionLabel;
const getSetSurveyQuestionNote = (state) => state.setSurveyQuestionNote;
const getSetSurveyQuestionOptions = (state) => state.setSurveyQuestionOptions;
const getSetSurveyQuestionScale = (state) => state.setSurveyQuestionScale;
const getSetSurveyQuestionPlaceholder = (state) =>
  state.setSurveyQuestionPlaceholder;
const getSetSurveyAnswerLenIsLimited = (state) =>
  state.setSurveyAnswerLenIsLimited;
const getSetSurveyAnswerLenMax = (state) => state.setSurveyAnswerLenMax;
const getSetSurveyAnswerRestricted = (state) => state.setSurveyAnswerRestricted;
const getSetConfigSurveyInfoBarColor = (state) =>
  state.setConfigSurveyInfoBarColor;
const getSetIsEditingSurveyQuestion = (state) =>
  state.setIsEditingSurveyQuestion;
const getSetIsEditingSurveyQuestionIndex = (state) =>
  state.setIsEditingSurveyQuestionIndex;
const getSetTriggerSurveyQuestionDeleteModal = (state) =>
  state.setTriggerSurveyQuestionDeleteModal;

const SurveyPageQuestions = () => {
  const checkRequiredQuestionsComplete = false;
  const surveyQuestionsArray = useStore(getSurveyQuestionsArray);
  const setSurveyQuestionsArray = useStore(getSetSurveyQuestionsArray);
  const setSurveyQuestionType = useStore(getSetSurveyQuestionType);
  const setSurveyAnswerRequired = useStore(getSetSurveyAnswerRequired);
  const setSurveyQuestionLabel = useStore(getSetSurveyQuestionLabel);
  const setSurveyQuestionNote = useStore(getSetSurveyQuestionNote);
  const setSurveyQuestionOptions = useStore(getSetSurveyQuestionOptions);
  const setSurveyQuestionScale = useStore(getSetSurveyQuestionScale);
  const setSurveyQuestionPlaceholder = useStore(
    getSetSurveyQuestionPlaceholder
  );
  const setSurveyAnswerLenIsLimited = useStore(getSetSurveyAnswerLenIsLimited);
  const setSurveyAnswerLenMax = useStore(getSetSurveyAnswerLenMax);
  const setSurveyAnswerRestricted = useStore(getSetSurveyAnswerRestricted);
  const setConfigSurveyInfoBarColor = useStore(getSetConfigSurveyInfoBarColor);
  const setIsEditingSurveyQuestion = useStore(getSetIsEditingSurveyQuestion);
  const setIsEditingSurveyQuestionIndex = useStore(
    getSetIsEditingSurveyQuestionIndex
  );
  const setTriggerSurveyQuestionDeleteModal = useStore(
    getSetTriggerSurveyQuestionDeleteModal
  );
  const { t } = useTranslation();

  const notifyReadyForEdit = () => {
    toast(t("readyForEdit"), {
      className: "p-4 min-w-[150px] bg-blue-500 text-white",
    });
  };

  const notifyQuestionDeleted = () => {
    toast(t("itemDeleted"), {
      className: "p-4 min-w-[150px] bg-orange-500 text-white",
    });
  };

  const itemToDeleteIndexRef = useRef(-1);

  const handleMoveUp = (e) => {
    const clickedItemIndex = parseInt(e.target.id);
    if (clickedItemIndex === 0) {
      return; // Element is already at the start
    }
    // if not at end, move up
    const temp = surveyQuestionsArray[clickedItemIndex];
    surveyQuestionsArray[clickedItemIndex] =
      surveyQuestionsArray[clickedItemIndex - 1];
    surveyQuestionsArray[clickedItemIndex - 1] = temp;
    setSurveyQuestionsArray([...surveyQuestionsArray]);
    return;
  };
  const handleMoveDown = (e) => {
    const clickedItemIndex = parseInt(e.target.id);
    // check if at end of array
    if (clickedItemIndex >= surveyQuestionsArray.length - 1) {
      return;
    }
    // if not at the beginning, move up
    const temp = surveyQuestionsArray[clickedItemIndex];
    surveyQuestionsArray[clickedItemIndex] =
      surveyQuestionsArray[clickedItemIndex + 1];
    surveyQuestionsArray[clickedItemIndex + 1] = temp;
    setSurveyQuestionsArray([...surveyQuestionsArray]);
    return;
  };

  const handleConfirmDelete = () => {
    if (itemToDeleteIndexRef.current !== -1) {
      const updatedArray = [...surveyQuestionsArray];
      updatedArray.splice(itemToDeleteIndexRef.current, 1);
      setSurveyQuestionsArray(updatedArray);
      itemToDeleteIndexRef.current = -1;
    }
    setTriggerSurveyQuestionDeleteModal(false);
    notifyQuestionDeleted();
  };

  const handleDelete = (e) => {
    const clickedItemIndex = parseInt(e.currentTarget.id);
    itemToDeleteIndexRef.current = clickedItemIndex;
    setTriggerSurveyQuestionDeleteModal(true);
  };
  const handleEdit = (e) => {
    const clickedItemIndex = parseInt(e.target.id);
    const targetObject = surveyQuestionsArray[clickedItemIndex];
    const keys = Object.keys(targetObject);

    setIsEditingSurveyQuestion(true);
    setIsEditingSurveyQuestionIndex(clickedItemIndex);

    keys.forEach((key) => {
      if (key === "surveyQuestionType") {
        setSurveyQuestionType(targetObject[key]);
      }
      if (key === "required") {
        setSurveyAnswerRequired(targetObject[key]);
      }
      if (key === "label") {
        setSurveyQuestionLabel(targetObject[key]);
      }
      if (key === "note") {
        setSurveyQuestionNote(targetObject[key]);
      }
      if (key === "options") {
        setSurveyQuestionOptions(targetObject[key]);
      }
      if (key === "scale") {
        setSurveyQuestionScale(targetObject[key]);
      }
      if (key === "placeholder") {
        setSurveyQuestionPlaceholder(targetObject[key]);
      }
      if (key === "limited") {
        setSurveyAnswerLenIsLimited(targetObject[key]);
      }
      if (key === "length") {
        setSurveyAnswerLenMax(targetObject[key]);
      }
      if (key === "restricted") {
        setSurveyAnswerRestricted(targetObject[key]);
      }
      if (key === "bg") {
        setConfigSurveyInfoBarColor(targetObject[key]);
      }
    });
    notifyReadyForEdit();
  };

  const SurveyQuestions = (surveyQuestionsArray) => {
    if (surveyQuestionsArray.length === 0) {
      return <div>{t("noQuestionsAdded")}</div>;
    } else {
      const QuestionList = surveyQuestionsArray.map((object, index) => {
        if (object.surveyQuestionType === "text") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyTextElement
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "textarea") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyTextAreaElement
                check={checkRequiredQuestionsComplete}
                id={index}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleDelete}
                  id={index}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "radio") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyRadioElement
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row  mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "select") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyDropdownElement
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "checkbox") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyCheckboxElement
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "rating2") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyRating2Element
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "likert") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyLikertElement
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "rating5") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyRating5Element
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "rating10") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyRating10Element
                key={uuid()}
                id={index}
                check={checkRequiredQuestionsComplete}
                opts={object}
              />
              <div className="flex flex-row mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px] active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        if (object.surveyQuestionType === "information") {
          return (
            <div key={uuid()} className="flex flex-row rounded-md">
              <SurveyInformationElement id={index} key={uuid()} opts={object} />
              <div className="flex flex-row  mt-5 w-[130px]">
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveUp}
                  src={UpArrows}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleDelete}
                  src={TrashCan}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  onClick={handleEdit}
                  id={index}
                  src={EditIcon}
                />
                <img
                  className="m-2 w-[26px] h-[30px]  active:bg-orange-300 hover:outline outline-2 outline-slate-300"
                  id={index}
                  onClick={handleMoveDown}
                  src={DownArrows}
                />
              </div>
            </div>
          );
        }
        return null;
      });
      return QuestionList;
    }
  };

  return (
    <div className="h-auto w-full">
      <DeleteSurveyItemModal handleConfirmDelete={handleConfirmDelete} />
      <hr className="mt-12 h-1 bg-slate-400 rounded-md" />
      <h2 className="mt-12 mb-4">{t("surveyQuestionPreview")}</h2>
      <div className="w-full">{SurveyQuestions(surveyQuestionsArray)}</div>
    </div>
  );
};

export default SurveyPageQuestions;
