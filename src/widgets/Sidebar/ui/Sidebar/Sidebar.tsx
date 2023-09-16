import * as React from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import HeartIcon from "shared/assets/icons/heart.svg";
import ChevronLeftIcon from "shared/assets/icons/chevron-left.svg";
import ChevronRightIcon from "shared/assets/icons/chevron-right.svg";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <nav className={classNames(styles.nav)}>
        <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          <HomeIcon /> {!collapsed && t("Главная")}
        </AppLink>
        <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <HeartIcon /> {!collapsed && t("О сайте")}
        </AppLink>
      </nav>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
        <Button
          className={styles.buttonToggle}
          data-testid='sidebar-toggle'
          variant='clear'
          onClick={onToggle}>
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>
      </div>
    </div>
  );
};
