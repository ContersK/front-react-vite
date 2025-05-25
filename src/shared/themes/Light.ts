import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: yellow[500],
      dark: yellow[800],
      light: yellow[300],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[800],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});
