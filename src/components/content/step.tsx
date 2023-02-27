import { Form, FormDataType, FormField } from "../form/form";
import { StepType } from "../../types";

export interface StepComponentProps {
  step: StepType;
  initialValues?: FormDataType;
  formFields: FormField<any>[];
  onSave: (formData: FormDataType) => void;
}

export const StepComponent = ({ step, initialValues, formFields, onSave }: StepComponentProps) => {
  return (
    <div>
      <h2>{step.title}</h2>
      <Form
        fields={formFields}
        initialValues={initialValues}
        FooterComponent={(formData) => (
          <button onClick={() => onSave(formData)}>Сохранить</button>
        )}
      />
    </div>
  );
}