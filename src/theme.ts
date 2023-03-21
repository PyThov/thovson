import { createTheme } from "@mui/material";

// Copied from: https://mui.com/material-ui/customization/palette/#adding-new-colors
// Addition required for Typescript
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h3: {
      fontSize: "1.2rem",
      // Scale font-size by container width
      "@media (min-width:800px)": {
        fontSize: "2rem",
      },
    },
    subtitle2: {
      fontSize: "10px",
      "@media (min-width:800px)": {
        // Scale font-size down for smaller screens
        fontSize: "16px",
      },
    },
  },
  palette: {
    primary: {
      light: "#6fc7ff",
      main: "#03a9f4",
      dark: "#0385c5",
      contrastText: "#000",
    },
    secondary: {
      light: "#f8c44a",
      main: "#f4b203",
      dark: "#a87301",
      contrastText: "#000",
    },
    neutral: {
      // light: "#eeeeee",
      // main: "#bdbdbd",
      // dark: "#757575",
      // contrastText: "#111",
      light: "#abb7c0",
      main: "#738796",
      dark: "#505f6b",
    },
  },
});
