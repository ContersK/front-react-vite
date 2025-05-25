import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
      dark: "#3700b3",
      light: "#6200ee",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#03dac6",
      dark: "#018786",
      light: "#03dac5",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});
