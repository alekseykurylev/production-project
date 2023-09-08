import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.logo}>LOGO</div>
      <nav className={classNames(styles.nav)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          {t("О сайте")}
        </AppLink>
      </nav>
    </div>
  );
};
