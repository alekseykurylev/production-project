import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button data-testid='sidebar-toggle' theme={ThemeButton.CLEAR} onClick={onToggle}>
        7777
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
