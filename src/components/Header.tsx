import React from "react";
import {
  Typography,
  useTheme,
} from "@mui/material";
import "./components.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Github from "@mui/icons-material/Github";
import { GITHUB_HREF, LINKED_IN_HREF } from "../utils/constants";
import { SlideOutIconButton, XSlider } from "./common";

export default function Header() {
  const theme = useTheme();

  const HeaderSeparator = () => {
    return (
      <div
        style={{
          borderLeft: "solid",
          borderWidth: "2px",
          borderColor: theme.palette.primary.contrastText,
          height: "2em",
          marginLeft: 20,
          marginRight: 20,
        }}
      />
    );
  };

  return (
    <div
      className="headerContainer"
      style={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="header">
        <Typography
          fontSize={16}
          fontWeight={600}
          color={theme.palette.secondary.contrastText}
          sx={{ marginLeft: 3 }}
        >
          Noah Thovson
        </Typography>
        <HeaderSeparator />
      </div>
      <div className="headerIcons">
        <SlideOutIconButton title={"Github"} href={GITHUB_HREF}>
          <Github fontSize="inherit" />
        </SlideOutIconButton>
        <SlideOutIconButton title={"Linked In"} href={LINKED_IN_HREF}>
          <LinkedIn fontSize="inherit" />
        </SlideOutIconButton>
      </div>
    </div>
  );
}
