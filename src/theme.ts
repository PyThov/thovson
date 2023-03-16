import { createTheme } from "@mui/material";

// Copied from: https://mui.com/material-ui/customization/palette/#adding-new-colors
// Addition required for Typescript
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h3: {
        fontSize: '1.2rem',
        '@media (min-width:800px)': {
            fontSize: '2rem',
          },
    },
  },
  palette: {
    primary: {
      light: "#35baf6",
      main: "#03a9f4",
      dark: "#0276aa",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffdf66",
      main: "#ffd740",
      dark: "#b2962c",
      contrastText: "#000",
    },
    neutral: {
      light: "#eeeeee",
      main: "#bdbdbd",
      dark: "#757575",
    },
  },
})
