import * as React from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & NavLinkProps;

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...other } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          styles.AppLink,
          {
            active: isActive,
          },
          [styles[theme], className],
        )
      }
      to={to}
      {...other}>
      {children}
    </NavLink>
  );
};
