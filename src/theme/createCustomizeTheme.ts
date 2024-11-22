import { createTheme, type ThemeOptions } from "@mui/material";
import { ColorPalette } from "./themeConfig";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    // private

    primary: {
      main: "#898989",
    },
    background: {
      default: "#efefef", // background color
      paper: "#fff",
    },
    warning: {
      main: "#666666", // category badge
    },

    // prod

    // primary: {
    //   main: "#EC407A", // Pink
    // },
    // secondary: {
    //   main: "#FCE4EC", //light pink
    // },
    // background: {
    //   default: ColorPalette.yellow,
    //   paper: "#fff",
    // },
    // warning: {
    //    main: ColorPalette.orange,
    // },

    error: {
      main: ColorPalette.red,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
  },
};

// Dark mode
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc", //
    },
    secondary: {
      main: "#fdf0d5",
    },
    background: {
      default: "#232e58",
      paper: "#1e1e1e",
    },
    warning: {
      main: ColorPalette.orange,
    },
    error: {
      main: ColorPalette.red,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
  },
};

export const createCustomTheme = (mode: "light" | "dark") => {
  return createTheme(mode === "light" ? lightThemeOptions : darkThemeOptions);
};
