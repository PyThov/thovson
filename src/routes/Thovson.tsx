import React from "react";
import { Grid } from "@mui/material";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import About from "../components/About";
import { SlidePanel } from "../components/common";

// TODO: Add slide out panel on the left side of page for portrait and short bio

export default function Thovson() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <SlidePanel bgColor="neutral.light" title="SKILLS">
          <Skills />
        </SlidePanel>
      </Grid>
      <Grid item xs={4}>
        <SlidePanel bgColor="neutral.main" title="EXPERIENCE">
          <Experience />
        </SlidePanel>
      </Grid>
      <Grid item xs={4}>
        <SlidePanel bgColor="neutral.dark" title="ABOUT">
          <About />
        </SlidePanel>
      </Grid>
    </Grid>
  );
}
