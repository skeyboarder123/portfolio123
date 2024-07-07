import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useAnimatedTranslation = (key: string | string[]) => {
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState<string | string[]>(t(key));
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const updateText = () => {
      setIsChanging(true);
      setCurrentText(t(key));
    };

    const timeout = setTimeout(() => {
      updateText();
      setIsChanging(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [key, t]);

  const displayText = Array.isArray(currentText)
    ? currentText.join(' ')
    : currentText;

  return { currentText: displayText, isChanging };
};

export default useAnimatedTranslation;
