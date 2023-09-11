import * as React from "react";
import { BrowserRouter } from "react-router-dom";

interface RouteDecoratorProps {
  children: React.ReactNode;
}

export const RouteDecorator: React.FC<RouteDecoratorProps> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
