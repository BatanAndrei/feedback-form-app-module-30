import "./loader.css";
import { ReactComponent as Icon } from "./loader.svg";

export interface LoaderProps {
  isActive: boolean;
}

export const Loader = ({ isActive }: LoaderProps) => {
  if (!isActive) {
    return null;
  }

  return (
    <div className="loader">
      <Icon />
    </div>
  );
}