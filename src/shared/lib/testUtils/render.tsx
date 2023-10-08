import * as React from "react";
import { render as testingLibraryRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { i18nForTests } from "shared/config/i18n";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export interface componentRenderOption {
  initialState?: DeepPartial<StateSchema>;
}

export function render(ui: React.ReactNode, store?: componentRenderOption) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <StoreProvider initialState={store.initialState}>
        <MemoryRouter>
          <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
        </MemoryRouter>
      </StoreProvider>
    ),
  });
}

// const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
//   <MemoryRouter>
//     <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
//   </MemoryRouter>
// );

// const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// export * from "@testing-library/react";
// export { customRender as render };
