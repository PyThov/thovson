// This file is to store commonly used components
import React from "react";
import { Box, Paper, Slide, Tooltip, Typography } from "@mui/material";
import { STYLE } from "../utils/constants";

interface ICenteredPaperCover {
  bgColor: string;
  children: JSX.Element;
}
export const CenteredPaperCover = ({
  bgColor,
  children,
}: ICenteredPaperCover) => {
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: 0,
        backgroundColor: bgColor,
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          minHeight: STYLE.mainVH,
          pointerEvents: "none",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

interface IIconHover {
  size: string;
  title: string;
  children: JSX.Element;
}
export const IconHover = ({ size, title, children }: IIconHover) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: size,
        height: size,
        fontSize: size,
      }}
    >
      <Tooltip title={title}>
        <div className="skillsIcon">{children}</div>
      </Tooltip>
    </div>
  );
};

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
        width: "2.5rem",
        height: "2.5rem",
        fontSize: "2.5rem",
      }}
    >
      <div className="skillsIcon">{children}</div>
      <Typography
        variant="subtitle1"
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
    <Paper
      elevation={2}
      sx={{ backgroundColor: backgroundColor, borderRadius: "4px" }}
    >
      {children}
    </Paper>
  );
};

// TODO: Click covered panel to lock open until clicked again? (toggle)
interface ISlidePanel {
  bgColor: string;
  title: string;
  children: React.ReactElement;
}
export const SlidePanel = ({ bgColor, title, children }: ISlidePanel) => {
  // State to track if the panel should be shown or hidden
  const [show, setShow] = React.useState(false);
  const [locked, setLocked] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Reference to the container div to be used in the mouse over and out events
  const containerRef = React.useRef(null);

  // Get the background color based on active/locked state
  const getBackgroundColor = () => {
    if (locked && active) {
      return "primary.main";
    } else if (!locked && active) {
      return "secondary.main";
    } else {
      return "inherit";
    }
  };

  const handleHover = () => {
    if (!locked) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (!locked) {
      setShow(false);
    }
  };

  const handleClick = () => {
    setLocked(!locked);

    // Reset background color after delay
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  const cover = (
    <CenteredPaperCover bgColor={bgColor}>
      <TitleLabel title={title} />
    </CenteredPaperCover>
  );

  const hidden = (
    // Hidden component container
    <Box
      minHeight={STYLE.mainVH}
      maxHeight={STYLE.mainVH}
      maxWidth="100%"
      zIndex={2}
      onClick={handleClick}
      sx={{
        overflow: "auto",
        backgroundColor: "#fff",
      }}
    >
      {/* Hidden component content */}
      <Box
        minHeight={STYLE.mainVH}
        height="100%"
        sx={{
          cursor: "pointer",
          transition: "background-color .8s ease",
          backgroundColor: getBackgroundColor(),
        }}
      >
        {children}
      </Box>
    </Box>
  );

  return (
    // The container div that holds the hidden component and the cover panel
    <Box
      position="relative"
      ref={containerRef}
      onMouseOver={handleHover} // Show the cover panel on mouse over
      onMouseOut={handleMouseLeave} // Hide the cover panel on mouse out
      maxHeight={STYLE.mainVH}
    >
      {/* The panel that displays before mouse hover  */}
      {cover}
      <Box position="absolute" top={0} width="100%">
        <Slide
          direction="down"
          in={show}
          unmountOnExit
          mountOnEnter
          timeout={400}
        >
          {/* The panel that slides in on mouse over */}
          {hidden}
        </Slide>
      </Box>
    </Box>
  );
};

interface ITitleLabel {
  title: string;
}
export const TitleLabel = ({ title }: ITitleLabel) => {
  return (
    <Typography variant="h3" color={"primary.contrastText"}>
      {title}
    </Typography>
  );
};
