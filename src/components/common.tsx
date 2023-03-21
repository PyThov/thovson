// This file is to store commonly used components
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import { STYLE } from "../utils/constants";

interface ICardItem {
  children: JSX.Element;
}
export const CardItem = ({ children }: ICardItem) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

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
        transitionDelay: "5s",
      }}
    >
      <div className="skillsIcon">{children}</div>
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

  // Reference to the container div to be used in the mouse over and out events
  const containerRef = React.useRef(null);

  const cover = (
    <CenteredPaperCover bgColor={bgColor}>
      <TitleLabel title={title} />
    </CenteredPaperCover>
  );

  const hidden = (
    <Box minHeight={STYLE.mainVH} zIndex={2} sx={{ backgroundColor: "#fff" }}>
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
      <Box position="absolute" top={0} width="100%">
        {/* The cover panel that slides in on mouse over */}
        <Slide direction="down" in={show} unmountOnExit mountOnEnter>
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
