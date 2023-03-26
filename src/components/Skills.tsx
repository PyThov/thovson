import React from "react";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { IconLabel, RoundBorder } from "./common";
import { SkillToIconMap, IconType } from "../icons";

// This object defines the styles to align items to the center horizontally and vertically.
const centerFlex = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

// TODO: Add a tooltip with years of experience?

const frontendSkills: IconType[] = [
  "ReactJS",
  "Typescript",
  "Javascript",
  "StencilJS",
  "HTML",
  "CSS",
  "Cypress",
  "Jest",
];

const backendSkills: IconType[] = ["Python", "Golang", "C#", "SQL"];

const tools: IconType[] = ["GitHub", "Docker", "Jenkins", "Linux"];

// This interface defines an object that maps a string key to an ISkillDetails object.
interface ISkills {
  [key: string]: IconType[];
}
const skills: ISkills = {
  Frontend: frontendSkills,
  Backend: backendSkills,
  Tools: tools,
};

// Skills is a React functional component that renders the above skills in a grid layout.
export default function Skills() {
  return (
    // TODO: Move this to a common property in the slider container?
    <Box margin="0 5% 5% 5%">
      {/* Top Label */}
      <Typography gutterBottom variant="h2" textAlign="center" paddingY=".2em">
        Skills
      </Typography>
      {/* Container of skill categories */}
      <Grid container direction="column" spacing={4}>
        {Object.keys(skills).map((skillCategory) => {
          return (
            <Grid key={skillCategory} item xs={4}>
              <Card
                sx={{
                  backgroundColor: "#f2f2f2",
                }}
              >
                <CardContent>
                  <RoundBorder backgroundColor="primary.light">
                    {/* Category Label */}
                    <Typography
                      variant="h3"
                      textAlign="center"
                      marginBottom="2rem"
                    >
                      {skillCategory}
                    </Typography>
                  </RoundBorder>
                  {/* Container of skills for a given category */}
                  <Paper sx={{ paddingY: "12px" }}>
                    <Grid
                      container
                      justifyContent="center"
                      spacing={3}
                      rowGap="1em"
                      padding=".8em"
                    >
                      {skills[skillCategory].map((skill) => {
                        return (
                          <Grid
                            key={`${skill}-icon`}
                            item
                            xs={6}
                            md={3}
                            sx={{ ...centerFlex }}
                          >
                            <IconLabel title={skill}>
                              {SkillToIconMap[skill]}
                            </IconLabel>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Paper>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
