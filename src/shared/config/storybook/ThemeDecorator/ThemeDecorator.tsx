import "app/styles/index.scss";
import * as React from "react";
import { Theme } from "app/providers/ThemeProvider";

interface ThemeDecoratorProps {
  children: React.ReactNode;
  theme: Theme;
}

export const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ children, theme }) => (
  <div className={`app ${theme}`}>{children}</div>
);
