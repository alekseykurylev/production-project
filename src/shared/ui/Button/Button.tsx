import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...other } = props;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
