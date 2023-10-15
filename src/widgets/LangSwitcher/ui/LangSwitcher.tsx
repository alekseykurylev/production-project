import * as React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      variant='clear'
      onClick={toggle}>
      {i18n.language === "ru" ? "ENG" : "РУС"}
    </Button>
  );
};
