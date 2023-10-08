import "./app/styles/index.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import ErrorBoundary from "app/providers/ErrorBoundary/ui/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import { App } from "app/App";
import "shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
