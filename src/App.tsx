import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Goals from "./routes/Goals";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return(
    <ThemeProvider theme={createTheme(theme)}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
