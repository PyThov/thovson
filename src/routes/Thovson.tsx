import React from "react";
import { Grid } from "@mui/material";
import { STYLE } from "../utils/constants";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { SlidePanel } from "../components/common";

import "./home.css";

// TODO: Add slide out panel on the left side of page for portrait and short bio

export default function Thovson() {
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: STYLE.mainVH,
        // backgroundColor: "neutral.light",
      }}
    >
      <Grid item xs={4}>
        <SlidePanel bgColor="neutral.light" textColor="neutral" title="SKILLS">
          <Skills />
        </SlidePanel>
      </Grid>
      <Grid item xs={4}>
        <SlidePanel
          bgColor="neutral.main"
          textColor="neutral"
          title="EXPERIENCE"
        >
          <Experience />
        </SlidePanel>
      </Grid>
      <Grid item xs={4}>
        <SlidePanel bgColor="neutral.dark" textColor="neutral" title="PROJECTS">
          <Projects />
        </SlidePanel>
      </Grid>
    </Grid>
  );
}
