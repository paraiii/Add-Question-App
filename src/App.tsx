import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import AppRouter from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./theme/createCustomizeTheme";

import { GlobalStyles } from "./styles/globalStyles";
import { TopBar } from "./components/TopBar";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

export const App = () => {
  const location = useLocation();
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createCustomTheme(mode);
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const getTitle = () => {
    if (location.pathname === "/add") {
      return "Add a Question";
    }
    if (location.pathname === "/") {
      return "Master Your Question!";
    }

    return "Placeholder";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <TopBar toggleTheme={toggleTheme} mode={mode} title={getTitle()} />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ThemeProvider>
  );
};
