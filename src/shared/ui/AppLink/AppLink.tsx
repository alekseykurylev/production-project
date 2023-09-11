import * as React from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type AppLinkProps = {
  theme?: AppLinkTheme;
  className?: string;
  children: React.ReactNode;
} & NavLinkProps;

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...others } = props;

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
      {...others}>
      {children}
    </NavLink>
  );
};
