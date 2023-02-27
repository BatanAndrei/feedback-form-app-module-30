import { PropsWithChildren } from "react";

export interface FormLabelProps {
  htmlFor: string;
  label: string;
}

export const FormLabel = ({ htmlFor, label, children }: PropsWithChildren<FormLabelProps>) => (
  <label htmlFor={htmlFor} className="form-label">
    <span className="name-caption" data-testid="name-label-caption">
      {label}
    </span>
    {children}
  </label>
)