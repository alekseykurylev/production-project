import * as React from "react";
import { classNames } from "shared/lib/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

type InputProps = {
  className?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
} & HTMLInputProps;

export const Input: React.FC<InputProps> = (props) => {
  const { className, onChange, autofocus, ...others } = props;
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <input
      ref={ref}
      onChange={onChangeHandler}
      className={classNames(styles.Input, {}, [className])}
      {...others}
    />
  );
};
