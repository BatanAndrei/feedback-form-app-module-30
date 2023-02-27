import { Form, FormDataType, FormField } from "../form";
import { fireEvent, getByText, render } from "@testing-library/react";

describe('test a form with input-text and textarea', function () {
  const getFields = () => {
    const input: FormField<"input"> = { type: "input", label: "ФИО" };
    const textarea: FormField<"textarea"> = { type: "textarea", label: "Расскажите немного о себе" };
    return [input, textarea];
  }

  it('should be a form with two inputs', function () {
    //TODO
    /**
     * назначение этого теста: проверить наличие input и textarea в форме
     * инструменты для рендера компонента и функция getByTestId из библиотеки testing-library помогут в этом
     *
     * нужно отрендерить форму, извлечь из формы input и textarea и проверить их наличие в форме
     * уже написанные тесты подскажут, как это лучше всего сделать
     *
     * функция getFields поможет заполнить пропс "fields" у формы
     */

    expect(true).toEqual(false);
  });

  it('should be a form with two labels', function () {
    const { getByText } = render(<Form fields={getFields()} FooterComponent={jest.fn()} />);

    const inputLabel = getByText("ФИО");
    const textareaLabel = getByText(/Расскажите/i);

    expect(inputLabel).toBeVisible();
    expect(textareaLabel).toBeVisible();
  });

  it('should be rendered "Click me" button inside the form', function () {
    //TODO
    /**
     * назначение этого теста: проверить наличие кнопки в футере формы
     * инструменты для рендера компонента и функция getByText из библиотеки testing-library помогут в этом
     *
     * нужно отрендерить форму, извлечь из формы кнопку, проверить ее наличие в форме, а также её состояние disabled
     *
     * функция getFields поможет заполнить пропс "fields" у формы
     */

    const testButton = <button disabled>Click me</button>;
    expect(true).toEqual(false);
  });

  it('should be correct form data received from the FooterComponent prop', function () {
    const buttonClickSpy = jest.fn();
    const FooterComponentSpy = (formData: FormDataType) => (
      <button data-testid="send-button" onClick={() => buttonClickSpy(formData)}>
        Click me
      </button>
    );

    const { getByTestId } = render(<Form fields={getFields()} FooterComponent={FooterComponentSpy} />);

    const input = getByTestId("0");
    const textarea = getByTestId("1");

    fireEvent.change(input, { target: { value: "Иван Иванов" } });
    fireEvent.change(textarea, { target: { value: "Родился, вырос и доволен собой" } });

    const button = getByTestId("send-button");
    fireEvent.click(button);

    const expectedFormData: FormDataType = {
      "0": "Иван Иванов",
      "1": "Родился, вырос и доволен собой"
    };

    expect(buttonClickSpy).toHaveBeenCalledWith(expectedFormData);
  });
});