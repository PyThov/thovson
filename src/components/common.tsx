import React, { ReactNode } from "react";
import { Button, Fade, IconButton, styled } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "@mui/material/Link/Link";
import { animated, useSpring } from "@react-spring/web";

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

interface ISlideOutIconButton {
  title: string;
  href: string;
  children: ReactNode;
}
export const SlideOutIconButton = ({
  title,
  href,
  children,
}: ISlideOutIconButton) => {
  const [showText, setShowText] = React.useState(false);
  const containerRef = React.useRef(null);

  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="hidden"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <IconButton
        href={href}
        target="_blank"
        size="large"
        ref={containerRef}
        sx={{
          color: "#fff",
          borderRadius: "4px 4px 0px 0px",
          width: "75px",
          "&:hover": {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.secondary.dark,
          },
          zIndex: 2,
        }}
      >
        {children}
      </IconButton>
      <Slide
        direction="down"
        easing={theme.transitions.easing.easeIn}
        in={showText}
        style={{ zIndex: 1 }}
      >
          <Link href={href} underline="none">
            <Typography
              color={"#fff"}
              noWrap
              align="center"
              sx={{
                fontSize: 16,
                fontWeight: "600",
                position: "fixed",
                backgroundColor: theme.palette.secondary.dark,
                borderRadius: "0px 0px 4px 4px",
                width: "75px",
                ":hover": {
                  color: theme.palette.primary.light,
                },
              }}
            >
              {title}
            </Typography>
          </Link>
      </Slide>
    </Box>
  );
};

export const XSlider = () => {  
  const theme = useTheme()
  const availableWidth = window.screen.availWidth

  const [springs, api] = useSpring(() => ({
    from: { x: -(availableWidth)},
    to: [
      { x: availableWidth },
      { x: -(availableWidth)},
    ],
    config: { mass: 5, friction: 15, tension: 5 },
    loop: true,
    delay: 1000
  }));

  return (<animated.div
    style={{
      position: "fixed",
      width: availableWidth / 2,
      height: 8,
      background: theme.palette.primary.main,
      borderRadius: 4,
      ...springs,
    }}
  />)
}
