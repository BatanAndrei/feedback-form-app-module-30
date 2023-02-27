import { FINISH_SCREEN_PATH, STEPS } from "../../const";
import { Route, Routes } from "react-router-dom";
import { StepComponent } from "./step";
import { MainScreen } from "./main-screen";
import { FormDataType } from "../form/form";
import { useEffect } from "react";
import { StepDataType } from "../../types";
import { FinishScreen } from "./finish-screen";

interface ContentProps {
  stepsData: StepDataType[] | null;
}

//TODO
/**
 * внутри компонента Content воспользоваться хуком для работы с контекстом FormDataContext,
 * а также хуками для работы с React Router
 * это позволит использовать весь закомментированный код и восстановить работу приложения
 */

export const Content = ({ stepsData }: ContentProps) => {
  const onSave = (index: number, stepData: StepDataType, formData: FormDataType) => {
    /*раскомментировать этот код поможет использование контекста FormDataContext*/
    //saveFormData(stepData.formName, formData);

    let path = FINISH_SCREEN_PATH;

    if (index < STEPS.length - 1) {
      path = STEPS[index + 1].path;
    }

    //TODO: с помощью навигации из React Router перейти на "path", в этой переменной уже лежит нужная часть URL
  }

  const checkIntroForm = () => {
    /*if (!isIntroFormFilled() && pathname !== "/") {
      //TODO: с помощью навигации из React Router перейти на "/" (начальный экран)
    }*/
  }

  useEffect(() => {
    checkIntroForm();
  }, []);

  if (!stepsData) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      {stepsData ? STEPS.map((step, index) => {
        const stepData = stepsData[index];

        if (!stepData?.fields || !stepData?.formName) {
          return null;
        }

        return (
          <Route
            key={step.path}
            path={step.path}
            element={(
              <StepComponent
                step={step}
                /*раскомментировать этот код поможет использование контекста FormDataContext*/
                // initialValues={getFormData(stepData.formName)}
                formFields={stepData.fields}
                onSave={(formData) => onSave(index, stepData, formData)}
              />
            )}
          />
        );
      }) : null}
      <Route path={FINISH_SCREEN_PATH} element={<FinishScreen />} />

      {/*TODO: добавить еще один роутер для обработки всех несуществующих страниц (404)*/}
    </Routes>
  );
}