import React from "react";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { IconType, SkillToIconMap } from "../icons";
import { IconHover } from "./common";

interface IExperience {
  title: string;
  dateRange: string;
  description: string;
  skills: IconType[];
}
const experiences: IExperience[] = [
  {
    title: "HPE - Cloud Software Engineer",
    dateRange: "May 2021 to Present",
    // description:
    //   "As a full-stack engineer, I've been developing and delivering high-quality microservices, in a collaborative and agile Scrum environment, while working with other teams to ensure integration and usability. This includes the use of tools like ReactJS, StencilJS, Typescript, Python, and GoLang.",
    description:
      "Specializing in and helping to lead frontend development of multiple microservices, as well as contributing to backend development. Accelerated learning and communication in a large organization.",
    skills: [
      "ReactJS",
      "StencilJS",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "Cypress",
      "Jest",
      "Python",
      "Golang",
      "SQL",
      "GitHub",
      "Linux",
      "Docker",
    ],
  },
  {
    title: "HPE - Full Stack Sustaining Engineer (Intern)",
    dateRange: "June 2020 to May 2021",
    // description:
    //   "As a member of a scrum team, I leveraged my skills in ReactJS, C#, and Python to analyze product data and create clear visual representations through charts and tables. Additionally, I wrote Python scripts to help manage our SQL database. By collaborating closely with my team, I successfully delivered actionable insights and contributed to the success of the project.",
    description:
      "Contributed to a metrics dashboard for management based on array and server data, utilizing fullstack tools.",
    skills: ["ReactJS", "Javascript", "HTML", "CSS", "C#", "Python", "SQL"],
  },
  {
    title: "Quantum - Engineering Lab Intern",
    dateRange: "May 2018 to June 2020",
    // description:
    //   "In a software test lab, I managed arrays and servers used by engineers worldwide, ensuring smooth operations and minimizing downtime. To enhance visibility into system metrics, I helped maintain an Elasticsearch, Kibana, Logstash workflow with Kotlin for displaying a metrics dashboard. Additionally, I explored and implemented a move to PowerBI for the dashboard, further improving data visualization and analysis. Throughout these tasks, I grew my expertise in Python to write and maintain various scripts.",
    description:
      "Helped maintain test servers and arrays used by engineers globally. Helped develop a metrics dashboard for management based on server and array data.",
    skills: ["Python", "Linux", "GitHub"],
  },
];

export default function Experience() {
  return (
    <Box marginX="6%">
      <Typography variant="h2" textAlign="center" paddingY=".5em">
        Experience
      </Typography>
      <Grid container direction="column" spacing={4}>
        {/* Map Experiences to card items */}
        {experiences.map((experience, i) => {
          return (
            <Grid key={`experience-${i}`} item xs={4}>
              <Card sx={{ backgroundColor: "#eee" }}>
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    gap="8px"
                  >
                    <Typography variant="h5" color={"primary.dark"}>
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle2" color="#333">
                      {experience.dateRange}
                    </Typography>
                    <Paper sx={{ padding: "10px" }}>
                      <Typography gutterBottom variant="body1">
                        {experience.description}
                      </Typography>
                      {/* Skill icons for each experience */}
                      <Grid container justifyContent="center">
                        {experience.skills.map((skill, i) => {
                          return (
                            <Grid
                              item
                              xs={3}
                              md={2}
                              lg={1.5}
                              key={`skill-icon-${i}`}
                              fontSize="2vw"
                              margin="6px"
                            >
                              <IconHover size="2rem" title={skill}>
                                {SkillToIconMap[skill]}
                              </IconHover>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
