import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { GitHubIcon } from "../icons";
import { LinkedIn } from "@mui/icons-material";
import { GITHUB_HREF, LINKED_IN_HREF } from "../utils/constants";

const ABOUT =
  "With a few years of experience as a software engineer, I have discovered a true passion for the entire development process. " +
  "From front-end to back-end, I am committed to expanding my knowledge and expertise in all areas of software development, with a current emphasis on front-end development. " +
  "As a lifelong learner, I am eager to share my knowledge with others and contribute to the growth of my team. " +
  "I feel fortunate to have had the opportunity to work on several projects during my career thus far. " +
  "Each project has allowed me to hone my skills and develop new ones, and I am excited to continue learning and growing as a software engineer and " +
  "am optimistic about the countless learning and development opportunities that lie ahead.";

export default function About() {
  return (
    <Box margin="0 5% 5% 5%">
      <Typography gutterBottom variant="h2" textAlign="center" paddingY=".2em">
        About
      </Typography>
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        direction="column"
      >
        {/* Picture */}
        <Grid item xs={6}>
          <Card sx={{ backgroundColor: "primary.light", marginX: "2vw" }}>
            <Paper elevation={6}>
              <CardMedia
                component="img"
                image="/noah_t.png"
                title="Noah Thovson Portrait"
              />
            </Paper>
            <Typography variant="h3" margin="1vh">
              Noah Thovson
            </Typography>
          </Card>
          {/* Icons */}
          <Box margin="4px">
            {/* Github Icon */}
            <Tooltip title="GitHub Projects">
              <IconButton
                aria-label="github"
                href={GITHUB_HREF}
                target="_blank"
                sx={{
                  borderRadius: "4px",
                  color: "secondary.contrastText",
                  ":hover": {
                    backgroundColor: "primary.dark",
                    color: "#fff",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            {/* Linked In Icon- */}
            <Tooltip title="Linked In">
              <IconButton
                aria-label="linked-in"
                href={LINKED_IN_HREF}
                target="_blank"
                sx={{
                  borderRadius: "4px",
                  color: "secondary.contrastText",
                  ":hover": {
                    backgroundColor: "primary.dark",
                    color: "#fff",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        {/* About Content */}
        <Grid item xs={6}>
          <Card sx={{ backgroundColor: "#eee" }}>
            <CardContent>
              <Paper sx={{ padding: "10px" }}>
                <Typography variant="body1">{ABOUT}</Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
