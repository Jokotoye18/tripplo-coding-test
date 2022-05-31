import { useState, useCallback } from 'react';

type useSecureTextEntryReturnType = {
  secureTextEntry: boolean;
  toggleEntry: () => void;
};

export const useSecureTextEntry = (isPassword: boolean): useSecureTextEntryReturnType => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const toggleEntry = useCallback(() => {
    setSecureTextEntry((prevState) => !prevState);
  }, []);

  return { secureTextEntry, toggleEntry };
};
