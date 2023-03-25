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
    h2: {
      // Scale font-size down for smaller screens
      "@media (max-width:900px)": {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontSize: "1.2rem",
      // Scale font-size by container width
      "@media (min-width:800px)": {
        fontSize: "2rem",
      },
    },
    subtitle2: {
      "@media (max-width:800px)": {
        // Scale font-size down for smaller screens
        fontSize: "12px",
      },
    },
    subtitle1: {
      "@media (max-width:800px)": {
        // Scale font-size down for smaller screens
        fontSize: "12px",
      },
      "@media (max-width:400px)": {
        // Scale font-size down for smaller screens
        fontSize: "8px",
        fontWeight: "900",
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
