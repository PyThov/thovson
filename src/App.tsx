import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return(
    <ThemeProvider theme={createTheme(theme)}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
