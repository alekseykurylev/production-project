import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames";
import styles from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input autofocus placeholder={t("Имя")} type='text' />
      <Input placeholder={t("Пароль")} type='text' />
      <Button>{t("Войти")}</Button>
    </div>
  );
};
