import { FormField } from "./components/form/form";
import { FormName } from "./context/form-data-context/types";

export interface StepType {
  title: string;
  path: string;
}

export interface StepDataType {
  fields: FormField<any>[];
  formName: FormName;
}