import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export const buttonSize = ["s", "m", "l"] as const;
export type ButtonSize = (typeof buttonSize)[number];

export const buttonVariant = ["clear", "filled", "outline"] as const;
export type ButtonVariant = (typeof buttonVariant)[number];

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, variant = "filled", size = "m", ...others } = props;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[variant], styles[size]])}
      type='button'
      {...others}>
      {children}
    </button>
  );
};
