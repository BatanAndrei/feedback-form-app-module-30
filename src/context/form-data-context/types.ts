import { FormDataType } from "../../components/form/form";

export enum FormName {
  Introduction = "intro",
  Location = "location",
  Goods = "goods",
  Service = "service",
}

export type FormDataContextResult = [string, FormDataType][];

export interface FormDataContextActions {
  saveFormData: (name: FormName, data: FormDataType) => void;
  getFormData: (name: FormName) => FormDataType | undefined;
  getAllForms: () => FormDataContextResult;
  isIntroFormFilled: () => boolean;
}

export interface FormDataContextType {
  [FormName.Introduction]?: FormDataType;
  [FormName.Location]?: FormDataType;
  [FormName.Goods]?: FormDataType;
  [FormName.Service]?: FormDataType;
}

export type FormContextType = FormDataContextActions & FormDataContextType;