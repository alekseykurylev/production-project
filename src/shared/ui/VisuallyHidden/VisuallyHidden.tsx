import * as React from "react";
import styles from "./VisuallyHidden.module.scss";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => (
  <span className={styles.VisuallyHidden}>{children}</span>
);
