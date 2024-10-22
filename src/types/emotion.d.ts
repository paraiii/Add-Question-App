import "@emotion/react";
import { Theme as MuiTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    /**
     * Emotion Primary color
     */
    primary: string;
    /**
     * Emotion Background color
     */
    secondary: string;
    /**
     * Emotion darkmode
     */
    darkmode: boolean;
  }
}
