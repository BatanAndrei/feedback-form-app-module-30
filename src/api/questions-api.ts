import { GOODS_STEP_DATA, LOCATION_STEP_DATA, SERVICE_STEP_DATA } from "../data";
import { FormName } from "../context/form-data-context/types";
import { StepDataType } from "../types";

export const loadQuestions = (): Promise<StepDataType[]> => new Promise(resolve => {
  const stepsData: StepDataType[] = [
    { fields: LOCATION_STEP_DATA, formName: FormName.Location },
    { fields: GOODS_STEP_DATA, formName: FormName.Goods },
    { fields: SERVICE_STEP_DATA, formName: FormName.Service },
  ];

  setTimeout(() => resolve(stepsData), 1500);
});