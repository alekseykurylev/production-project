import { useTheme, Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/light.svg";
import DarkIcon from "shared/assets/icons/dark.svg";
import { Button, ThemeButton } from "shared/ui/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
