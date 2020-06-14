import {useState} from 'react';

export const useForm = initialValue => {
  const [values, setValue] = useState(initialValue);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValue(initialValue);
      }
      return setValue({...values, [formType]: formValue});
    },
  ];
};
