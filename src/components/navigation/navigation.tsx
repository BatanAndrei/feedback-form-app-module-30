import { useContext, useMemo } from "react";
import { FINISH_SCREEN_PATH, STEPS } from "../../const";
import "./navigation.css";
import { FormDataContext } from "../../context/form-data-context/form-data-context";
import { useLocation, useNavigate } from "react-router-dom";

//TODO
/**
 * внутри компонента Navigation воспользоваться хуком для работы с контекстом FormDataContext,
 * а также хуками для работы с React Router
 * это позволит использовать весь закомментированный код и восстановить работу приложения
 */
export const Navigation = () => {
  const { pathname } = useLocation(); 
  const navigate = useNavigate();
  const { isIntroFormFilled } = useContext(FormDataContext)
  //TODO: воспользуйтесь хуками React Router для получения актуального "pathname"
  //const pathname: any = "IT MUST BE REPLACED";

  //TODO: воспользуйтесь хуками React Router для получения работспособой функции "navigate"
  //const navigate: any = () => "I DO NOTHING USEFUL";

  const isMainPath = useMemo(() => pathname === "/", [pathname]);

  const onNextClick = () => {
    if (pathname === FINISH_SCREEN_PATH) {
      return;
    }

    if (isMainPath) {
      navigate(STEPS[0].path);
      return;
    }

    const currentStepIndex = STEPS.findIndex(({ path }) => path === pathname);

    if (currentStepIndex === STEPS.length - 1) {
      navigate(FINISH_SCREEN_PATH);
      return;
    }

    if (currentStepIndex > -1) {
      navigate(STEPS[currentStepIndex + 1].path);
    }
  }

  const onBackClick = () => {
    if (isMainPath) {
      return;
    }

    if (pathname === FINISH_SCREEN_PATH) {
      navigate(STEPS[STEPS.length - 1].path);
      return;
    }

    const currentStepIndex = STEPS.findIndex(({ path }) => path === pathname);

    if (currentStepIndex === 0) {
      navigate("/");
    }

    if (currentStepIndex > 0) {
      navigate(STEPS[currentStepIndex - 1].path);
    }
  }

  const getNextButtonDisabled = () => {
    /*раскомментировать этот код поможет использование контекста FormDataContext и хуков React Router*/
    if (isMainPath && isIntroFormFilled()) return false;
    return isMainPath || pathname === FINISH_SCREEN_PATH

    return false;
  }

  return (
    <div className="navigation">
      <button type="button" onClick={onBackClick} disabled={isMainPath}>
        Назад
      </button>

      <button
        type="button"
        onClick={onNextClick}
        disabled={getNextButtonDisabled()}
      >
        Вперед
      </button>
    </div>
  );
}