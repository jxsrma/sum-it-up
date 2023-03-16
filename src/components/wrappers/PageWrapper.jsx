import React from "react";
import Header from "components/Header";
import { xyPaddingResponsive } from "constants/tailwindclasses";

const PageWrapper = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <main
        className={`w-full flex-1 flex bg-slate-100 ${xyPaddingResponsive}`}
      >
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
