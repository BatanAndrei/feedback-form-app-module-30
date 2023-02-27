//TODO
/**
 * внутри компонента FinishScreen воспользоваться хуком для работы с контекстом FormDataContext,
 * это позволит использовать весь закомментированный код и восстановить работу приложения
 */
export const FinishScreen = () => {
  const onSendClick = () => {
    /*раскомментировать этот код поможет использование контекста FormDataContext*/

    // const result = getAllForms();
    // console.log(result);
  }

  return (
    <div>
      <h2>Благодарим за ваши ответы!</h2>
      <button onClick={onSendClick}>
        Отправить
      </button>
    </div>
  )
}