// This file is to store commonly used components
import React from "react";
import { Box, Paper, Slide, Typography } from "@mui/material";
import { STYLE } from "../utils/constants";

interface IIconLabel {
  title: string;
  children: JSX.Element;
}
export const IconLabel = ({ title, children }: IIconLabel) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "50px",
        height: "50px",
        fontSize: "50px",
      }}
    >
      <div className="skillsIcon">
        {/* TODO: Make icons grow and animate when hovered? */}
        {children}
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
    </div>
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
  const [show, setShow] = React.useState(false);

  // Reference to the container div to be used in the mouse over and out events
  const containerRef = React.useRef(null);

  const cover = (
    <Paper
      elevation={4}
      sx={{
        height: "100%",
        borderRadius: 0,
        backgroundColor: bgColor,
        pointerEvents: "none",
      }}
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
          pointerEvents: "none",
        }}
      >
        {/* The title of the cover panel */}
        <Typography variant="h3" color={textColor}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );

  const hidden = (
    <Box
      height={STYLE.mainVH}
      zIndex={2}
      sx={{ backgroundColor: "neutral.light" }}
    >
      {/* The hidden component content */}
      {children}
    </Box>
  );

  return (
    // The container div that holds the hidden component and the cover panel
    <Box
      position="relative"
      ref={containerRef}
      onMouseOver={() => setShow(true)} // Show the cover panel on mouse over
      onMouseOut={() => setShow(false)} // Hide the cover panel on mouse out
    >
      {cover}
      <Box position="absolute" top={0} height={STYLE.mainVH} width="100%">
        {/* The cover panel that slides in on mouse over */}
        <Slide direction="down" in={show} unmountOnExit mountOnEnter>
          {hidden}
        </Slide>
      </Box>
    </Box>
  );
};
