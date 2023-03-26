import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { GITHUB_REPO_HREF, STYLE } from "../utils/constants";

const FOOTER = `Made with Vite + React + Typescript :)`;

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        left: 0,
        bottom: 0,
        height: STYLE.footerVH,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.light",
        gap: "10px",
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
          <GitHub />
        </IconButton>
      </Tooltip>
      <Typography color="secondary.contrastText">{FOOTER}</Typography>
    </Box>
  );
}
