import { FormField, FormOption } from "./components/form/form";

const OPTIONS_5: FormOption[] = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
];

const LOCATION_1: FormField<"options"> = {
  type: "options",
  options: OPTIONS_5,
  label: "Удобно ли расположен наш магазин?",
}

const LOCATION_2: FormField<"options"> = {
  type: "options",
  options: OPTIONS_5,
  label: "Удобен ли заезд на парковку?",
}

const LOCATION_3: FormField<"options"> = {
  type: "options",
  options: [
    { label: "Очень быстро", value: "1" },
    { label: "Немного поискал", value: "2" },
    { label: "Потратил на это много времени!", value: "3" },
  ],
  label: "Вы быстро нашли центральный вход в магазин?",
}

const LOCATION_4: FormField<"textarea"> = {
  type: "textarea",
  label: "Ваши пожелания к нашей парковке",
  placeholder: "Укажите на основные проблемы",
  maxLength: 100
}

const GOODS_OPTIONS_LABELS = [
  "Оцените ассортимент молочной продукции",
  "Оцените ассортимент хлебобулочных изделий",
  "Оцените ассортимент зимней резины",
  "Оцените качество сырокопченостей",
  "Как вам ассортимент сыров и рыбы?",
];

const COMPILED_GOODS_OPTIONS: FormField<"options">[] = GOODS_OPTIONS_LABELS.map(label => ({
  label,
  options: OPTIONS_5,
  type: "options"
}));

const GOODS_6: FormField<"textarea"> = {
  type: "textarea",
  label: "Чем бы вы дополнили хлебобулочный отдел?",
  placeholder: "Укажите свои пожелания",
  maxLength: 100
}

const GOODS_7: FormField<"textarea"> = {
  type: "textarea",
  label: "А как насчет рыбного отдела?",
  placeholder: "Укажите свои пожелания",
  maxLength: 100
}

const GOODS_8: FormField<"input"> = {
  type: "input",
  label: "Ваш самый любюмый отдел?",
  placeholder: "Коротко",
  maxLength: 10
}

const GOODS_9: FormField<"input"> = {
  type: "input",
  label: "Ваш самый нелюбюмый отдел?",
  placeholder: "Можно больше подробностей",
  maxLength: 30
}

const SERVICE_1: FormField<"input"> = {
  type: "input",
  label: "Вам понравились наши кассиры?",
  placeholder: "Пожалуйста, будьте кратки",
  maxLength: 30
}

const SERVICE_2: FormField<"input"> = {
  type: "input",
  label: "Что насчет менеджеров?",
  placeholder: "Пожалуйста, будьте кратки",
  maxLength: 30
}

const SERVICE_3: FormField<"input"> = {
  type: "input",
  label: "Как вам сотрудники в зале, ничем не огорчили?",
  placeholder: "Пожалуйста, будьте кратки",
  maxLength: 30
}

export const LOCATION_STEP_DATA = [LOCATION_1, LOCATION_2, LOCATION_3, LOCATION_4];
export const GOODS_STEP_DATA = [...COMPILED_GOODS_OPTIONS, GOODS_6, GOODS_7, GOODS_8, GOODS_9];
export const SERVICE_STEP_DATA = [SERVICE_1, SERVICE_2, SERVICE_3];