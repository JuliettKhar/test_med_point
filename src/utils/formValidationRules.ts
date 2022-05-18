const validateEmpty = (rule: any, value: any, callback: (err?: Error | string | undefined) => void) => {
  if (!value) {
    callback(new Error('Поле должно быть заполнено'));
  } else {
    callback();
  }
};

export const rules = {
  title: [
    {validator: validateEmpty, message: 'Поле должно быть заполнено', trigger: 'blur'},
  ],
  rgn: [
    {validator: validateEmpty, message: 'Поле должно быть заполнено', trigger: 'blur'},
  ],
  district_title: [
    {validator: validateEmpty, message: 'Поле должно быть заполнено', trigger:['blur', 'change']},
  ],
};
