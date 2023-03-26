import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import { GITHUB_REPO_HREF, STYLE } from "../utils/constants";

const FOOTER = `Made with Vite + React + Typescript :)`;

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        height: STYLE.footerVH,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.light",
        gap: "10px",
        zIndex: -1,
      }}
    >
      <Tooltip title="Thovson GitHub Repo">
        <IconButton
          aria-label="github"
          href={GITHUB_REPO_HREF}
          target="_blank"
          sx={{
            borderRadius: "4px",
            color: "secondary.contrastText",
            ":hover": {
              backgroundColor: "secondary.dark",
              color: "#fff",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Typography color="secondary.contrastText">{FOOTER}</Typography>
    </Box>
  );
}
