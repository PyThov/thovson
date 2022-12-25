import { useTheme } from "@mui/material";
import { FOOTER } from "../utils/texts";
import "./components.css";

export default function Footer() {
  const theme = useTheme();

  return (
    <div
      className="footer"
      style={{ backgroundColor: theme.palette.secondary.dark }}
    >
      {FOOTER}
    </div>
  );
}
