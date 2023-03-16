import React, { useContext } from "react";
import { xyPaddingResponsive } from "constants/tailwindclasses";
import "./styles.css";
import { AppContext } from "App";
import modes from "constants/modes";

const Header = () => {
  const { mode, updateModeName, updateModeValue } = useContext(AppContext);
  return (
    <header
      className={`
      flex items-center flex-col gap-4 md:flex-row justify-between w-screen ${xyPaddingResponsive} border-b-2`}
    >
      <h1 className="text-3xl font-bold text-slate-700">Sum-It-Up</h1>
      <nav className="flex gap-4 justify-around  bg-slate-400 flex-col md:flex-row px-4 py-2 text-white shadow-lg rounded-sm md:rounded-lg items-center">
        <button
          className={mode.name === modes.punctuate ? "selected" : ""}
          onClick={() => updateModeName(modes.punctuate)}
        >
          Punctuate
        </button>
        <button
          className={mode.name === modes.grammarize ? "selected" : ""}
          onClick={() => updateModeName(modes.grammarize)}
        >
          Grammarize
        </button>
        <button
          className={mode.name === modes.summarize ? "selected" : ""}
          onClick={() => updateModeName(modes.summarize)}
        >
          Summarize
        </button>
        {/* input type range */}

        <div
          className={`flex items-center gap-2 transition-[width] duration-500 ease-out
            ${mode.name === "Summarize" ? "w-44" : "w-0 opacity-0"}
          `}
        >
          <input
            name="range"
            type="range"
            min="0"
            max="100"
            value={mode?.value || 50}
            onChange={(e) => updateModeValue(e.target.value)}
            className="appearance-none h-2 bg-slate-200 accent-slate-100 rounded-full"
          />
          <label htmlFor="range">{mode.value}%</label>
        </div>
      </nav>
      <nav className="flex items-center justify-between text-white">
        <button className="px-4 py-2 bg-red-200 text-red-600 rounded">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
