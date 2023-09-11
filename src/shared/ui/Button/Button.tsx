import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  theme?: ThemeButton;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...others } = props;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...others}
      type='button'>
      {children}
    </button>
  );
};
