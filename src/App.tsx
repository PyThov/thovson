import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Thovson from "./routes/Thovson";

declare global {
  // eslint-disable-next-line no-var
  var isMobile: boolean;
}

window.isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Thovson />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
