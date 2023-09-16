import * as React from "react";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import SunIcon from "shared/assets/icons/sun.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import { Button } from "shared/ui/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      variant='clear'
      onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
