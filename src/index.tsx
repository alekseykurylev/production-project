import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import ErrorBoundary from "app/providers/ErrorBoundary/ui/ErrorBoundary";
import "shared/config/i18n/i18n";
import { App } from "app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
