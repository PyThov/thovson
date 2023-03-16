import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Thovson from "./routes/Thovson";

function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Thovson />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
