import { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "pages/MainPage";
import modes from "constants/modes";
import LoadingOverlay from "components/LoadingOverlay";

export const AppContext = createContext();

function App() {
  const [mode, setMode] = useState({
    name: modes.summarize,
    value: 50,
  });
  const [loading, setLoading] = useState(false);
  const updateModeName = (name) => setMode((mode) => ({ ...mode, name }));

  const updateModeValue = (value) => setMode((mode) => ({ ...mode, value }));

  return (
    <AppContext.Provider
      value={{ mode, updateModeName, updateModeValue, loading, setLoading }}
    >
      <LoadingOverlay />
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
