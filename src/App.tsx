import React, { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import AppRouter from "./router";
import {
  CssBaseline,
  FormControlLabel,
  styled,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { createCustomTheme } from "./theme/createCustomizeTheme";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { GlobalStyles } from "./styles/globalStyles";

export const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = createCustomTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <StyledSwitch
        control={
          <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            icon={<Brightness7 />}
            checkedIcon={<Brightness4 />}
          />
        }
        label={mode === "light" ? "Light" : "Dark"}
      />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ThemeProvider>
  );
};

const StyledSwitch = styled(FormControlLabel)`
  display: flex;
  justify-content: end;
`;
