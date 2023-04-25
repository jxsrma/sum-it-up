import { AppContext } from "App";
import React, { useContext } from "react";

const LoadingOverlay = () => {
  const { loading } = useContext(AppContext);
  if (!loading) return null;
  return (
    <div className="absolute inset-0 bg-white/70">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-400"></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
