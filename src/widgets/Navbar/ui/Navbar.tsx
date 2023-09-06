import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import styles from "./Navbar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.logo}>LOGO</div>
      <nav className={classNames(styles.nav)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
      </nav>
      <ThemeSwitcher />
    </div>
  );
};
