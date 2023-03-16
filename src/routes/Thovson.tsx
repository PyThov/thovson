import React from "react";
import { Box, Grid, Paper, Slide, Typography } from "@mui/material";
import "./home.css";

export default function Thovson() {
  interface ISlidePanel {
    bgColor: string;
    title: string;
    children: React.ReactElement;
  }
  const SlidePanel = ({ bgColor, title, children }: ISlidePanel) => {
    const [show, setShow] = React.useState(true);
    const containerRef = React.useRef(null);

    return (
      <Box
        position="relative"
        ref={containerRef}
        onMouseOver={() => setShow(false)}
        onMouseOut={() => setShow(true)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
          }}
        >
          {/* Hidden component content */}
          {children}
        </Box>
        <Box position="absolute" top={0} zIndex={1} height="95vh" width="100%">
          {/* Bottom component content */}
          <Slide direction="down" in={show} mountOnEnter unmountOnExit>
            <Paper
              elevation={4}
              sx={{ height: "100%", borderRadius: 0, backgroundColor: bgColor }}
            >
              {/* Cover component content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "95vh",
                }}
              >
                <Typography variant="h3" color="neutral">{title}</Typography>
              </Box>
            </Paper>
          </Slide>
        </Box>
      </Box>
    );
  };

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "95vh",
        backgroundColor: "primary.light",
      }}
    >
      <Grid
        item
        xs={4}
      >
        <SlidePanel bgColor="neutral.light" title="SKILLS">
          <Box>asdf</Box>
        </SlidePanel>
      </Grid>
      <Grid
        item
        xs={4}
      >
        <SlidePanel bgColor="neutral.main" title="EXPERIENCE">
          <div>Detail</div>
        </SlidePanel>
      </Grid>
      <Grid
        item
        xs={4}
      >
        <SlidePanel bgColor="neutral.dark" title="PROJECTS">
          <div>Detail</div>
        </SlidePanel>
      </Grid>
    </Grid>
  );
}
