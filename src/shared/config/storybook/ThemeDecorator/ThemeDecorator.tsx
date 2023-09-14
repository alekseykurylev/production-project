import "app/styles/index.scss";
import * as React from "react";

interface ThemeDecoratorProps {
  children: React.ReactNode;
}

export const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ children }) => (
  <div className='app'>{children}</div>
);
