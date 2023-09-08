import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { VisuallyHidden } from "../VisuallyHidden";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Loader, {}, [className])}>
      <VisuallyHidden>{t("Загрузка")}</VisuallyHidden>
    </div>
  );
};
