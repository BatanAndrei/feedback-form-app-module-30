import { createContext, PropsWithChildren, useState } from "react";
import { FormDataType } from "../../components/form/form";
import { FormContextType, FormDataContextResult, FormDataContextType, FormName } from "./types";

//TODO
/**
 * createContext ожидает значение по-умолчанию, и это должен быть не просто пустой объект, как сейчас
 * TypeScript подскажет, чего в этом объекте не хватает
 * нужно заполнить объект, с которым вызывается createContext, соответствующими полями
 */
const defaultValue: FormContextType = {
  saveFormData: () => {},
  getFormData: () => {return undefined},
  getAllForms: () => {return []},         //????? правильно ли возвращать пустой массив
  isIntroFormFilled: () => { return false}, 
};

export const FormDataContext = createContext<FormContextType>(defaultValue);

export const FormDataContextWrapper = ({ children }: PropsWithChildren) => {
  
  const [forms, setFormsData] = useState<FormDataContextType>({});

  const saveFormData = (name: FormName, data: FormDataType) => {
    setFormsData(prev => ({ ...prev, [name]: data }));
  }

  const getFormData = (name: FormName): FormDataType | undefined => {
    //TODO: реализовать логику поиска нужной формы
    return undefined;
  };

  const getAllForms = (): FormDataContextResult => {
    return []
    //return Array.from(Object.entries(forms));
  }

  const isIntroFormFilled = (): boolean => {
    //TODO: реализовать логику проверки: заполнено ли хотя бы одно поле в форме FormName.Introduction
    return false;
  }

  return (
    <FormDataContext.Provider value={{ ...forms, saveFormData, getFormData, getAllForms, isIntroFormFilled }}>
      {children}
    </FormDataContext.Provider>
  );
}