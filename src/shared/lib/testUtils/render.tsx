import * as React from "react";
import { render as testingLibraryRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { i18nForTests } from "shared/config/i18n";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export interface componentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

export function render(ui: React.ReactNode, options: componentRenderOptions = {}) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <StoreProvider initialState={options.initialState}>
        <MemoryRouter>
          <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
        </MemoryRouter>
      </StoreProvider>
    ),
  });
}
