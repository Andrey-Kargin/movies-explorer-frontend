import { useState, useCallback } from 'react';

const useForm = () => {
  const [enteredValues, setEnteredValues] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;

    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });


    setIsFormValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredValues(newValues);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredValues, setIsFormValid],
  );

  return {
    enteredValues,
    setEnteredValues,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default useForm;