import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Thovson from "./routes/Thovson";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Thovson />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
