import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

type ButtonProps = {
  className?: React.ReactNode;
  theme: ThemeButton;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...other } = props;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...other}
      type='button'>
      {children}
    </button>
  );
};
