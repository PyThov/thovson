import React from "react";
import { Box, Chip, Grid } from "@mui/material";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import About from "../components/About";
import { SlidePanel } from "../components/common";

export default function Thovson() {
  const [showChip, setShowChip] = React.useState(window.isMobile);

  return (
    <Grid container direction={window.isMobile ? "column-reverse" : "row"}>
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
      {showChip && (
        <Box display="flex" position="fixed" top={0} margin="1vh" zIndex={2}>
          <Chip
            variant="filled"
            label="Tap a panel!"
            color="secondary"
            onDelete={() => setShowChip(false)}
          />
        </Box>
      )}
    </Grid>
  );
}
