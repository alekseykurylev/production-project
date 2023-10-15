import * as React from "react";
import { Loader } from "shared/ui/Loader";
import { classNames } from "shared/lib/classNames";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
