import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import AppRouter from "./router";
import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ThemeProvider>
  );
};
