import { ReactNode } from "react";
import { Loader } from "../loader/loader";
import "./layout.css";

export interface LayoutProps {
  showLoader: boolean;
  HeaderComponent: ReactNode;
  NavComponent: ReactNode;
  ContentComponent: ReactNode;
}

//TODO
/**
 * извлеките все недостающие пропсы и расставьте их по нужным местам,
 * чтобы компонент Layout заработал корректно
 */
export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <div className="header" />

      <div className="nav" />

      <div className="layout-content">
        <Loader isActive={true} />

        <div className="layout-content-inner" />
      </div>
    </div>
  );
}
