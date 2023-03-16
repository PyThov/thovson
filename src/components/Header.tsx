import React from "react";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import "./components.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { LINKED_IN_HREF } from "../utils/constants";

/*
TODO: 
 - Add buttons on header for different pages
    -  goals, past work experience, accomplishments, social media
 - Add React routes for each page
*/

const getVariant = (button: string) => {
  const active = window.location.pathname.toLowerCase();

  if (active.includes(button.toLowerCase())) {
    return "outlined";
  } else {
    return "text";
  }
};

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

  const generateButton = (title: string) => {
    return (
      <Button
        className="headerButton"
        size="large"
        variant={getVariant(title)}
        href={`/${title}`}
        sx={{
          color: theme.palette.primary.light,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }}
      >
        {title}
      </Button>
    );
  };

  return (
    <div
      className="headerContainer"
      style={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="header">
        <Button
          href="/"
          sx={{ marginLeft: 3 }}
          color="secondary"
          variant="contained"
        >
          <Typography
            fontSize={16}
            fontWeight={600}
            color={theme.palette.secondary.contrastText}
          >
            Noah Thovson
          </Typography>
        </Button>
        <HeaderSeparator />
        {generateButton("goals")}
        {generateButton("resume")}
        {/* {generateButton("projects")} */}
        {generateButton("about")}
      </div>
      <div style={{ marginRight: "50px", backgroundColor: "inherit" }}>
        <Tooltip title="Linked In" arrow>
          <IconButton
            href={LINKED_IN_HREF}
            target="_blank"
            size="large"
            sx={{
              color: "#fff",
              "&:hover": {
                color: theme.palette.primary.light,
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            <LinkedIn fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
