// This file is to store commonly used components
import React from "react";
import { Box, Paper, Slide, Typography, Zoom } from "@mui/material";
import { STYLE } from "../utils/constants";
import Button from "@mui/material/Button";

interface IIconLabel {
  title: string;
  children: JSX.Element;
}
export const IconLabel = ({ title, children }: IIconLabel) => {
  return (
    <>
      <div className="skillsIcon">
        {/* TODO: Make icons grow and animate when hovered? */}
        {/* <Zoom in={true} style={{transitionDelay: '500ms'}}> */}
        {children}
        {/* </Zoom> */}
      </div>
      {/* TODO: Add rounded box around title? */}
      <Typography
        variant="subtitle2"
        textAlign="center"
        overflow="ellipsis"
        whiteSpace="nowrap"
      >
        {title}
      </Typography>
    </>
  );
};

interface IRoundBorder {
  backgroundColor: string;
  children: JSX.Element;
}
export const RoundBorder = ({ backgroundColor, children }: IRoundBorder) => {
  return (
    <Box borderRadius="4px" sx={{ backgroundColor: backgroundColor }}>
      {children}
    </Box>
  );
};

interface ISlidePanel {
  bgColor: string;
  textColor: string;
  title: string;
  children: React.ReactElement;
}
export const SlidePanel = ({
  bgColor,
  textColor,
  title,
  children,
}: ISlidePanel) => {
  // State to track if the panel should be shown or hidden
  const [show, setShow] = React.useState(true);

  // Reference to the container div to be used in the mouse over and out events
  const containerRef = React.useRef(null);

  return (
    // The container div that holds the hidden component and the cover panel
    <Box
      position="relative"
      ref={containerRef}
      onMouseOver={() => setShow(false)} // Show the cover panel on mouse over
      onMouseOut={() => setShow(true)} // Hide the cover panel on mouse out
    >
      <Box height={STYLE.mainVH}>
        {/* The hidden component content */}
        {children}
      </Box>
      <Box
        position="absolute"
        top={0}
        zIndex={1}
        height={STYLE.mainVH}
        width="100%"
      >
        {/* The cover panel that slides in on mouse over */}
        <Slide direction="down" in={show} unmountOnExit mountOnEnter>
          <Paper
            elevation={4}
            sx={{ height: "100%", borderRadius: 0, backgroundColor: bgColor, pointerEvents: "none" }}
          >
            {/* The content of the cover panel */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                height: STYLE.mainVH,
                pointerEvents: "none"
              }}
            >
              {/* The title of the cover panel */}
              <Typography variant="h3" color={textColor}>
                {title}
              </Typography>
            </Box>
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};
