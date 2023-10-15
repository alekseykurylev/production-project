import * as React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";
import { LoginModal } from "features/AuthByUserName";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIisAuthModal] = React.useState(false);

  const onCloseModal = React.useCallback(() => {
    setIisAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setIisAuthModal(true);
  }, []);

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
      <Button variant='filled' size='s' onClick={onShowModal}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
