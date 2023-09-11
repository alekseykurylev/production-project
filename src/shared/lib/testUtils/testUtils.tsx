import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { i18nForTests } from "shared/config/i18n";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
