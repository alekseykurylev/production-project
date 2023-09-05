import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends NavLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...other
  } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          styles.AppLink,
          {
            active: isActive,
          },
          [styles[theme], className]
        )
      }
      to={to}
      {...other}
    >
      {children}
    </NavLink>
  );
};
