import * as React from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { AppRouter } from "./providers/router";

export const App = () => (
  <div className='"app"'>
    <React.Suspense fallback=''>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </React.Suspense>
  </div>
);
