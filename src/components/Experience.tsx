import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

interface IExperience {
  title: string;
  dateRange: string;
  description: string;
}
const experiences: IExperience[] = [
  {
    title: "HPE - Cloud Software Engineer",
    dateRange: "May 2021 to Present",
    description: "As a full-stack engineer, I've been developing and delivering high-quality microservices, in a collaborative and agile Scrum environment, while working with other teams to ensure integration and usability. This includes the use of tools like ReactJS, StencilJS, Typescript, Python, and GoLang."
  },
  {
    title: "HPE - Full Stack Sustaining Engineer (Intern)",
    dateRange: "June 2020 to May 2021",
    description: "As a member of a scrum team, I leveraged my skills in ReactJS, C#, and Python to analyze product data and create clear visual representations through charts and tables. Additionally, I wrote Python scripts to help manage our SQL database. By collaborating closely with my team, I successfully delivered actionable insights and contributed to the success of the project."
  },
  {
    title: "Quantum - Engineering Lab Intern",
    dateRange: "May 2018 to June 2020",
    description: "In a software test lab, I managed arrays and servers used by engineers worldwide, ensuring smooth operations and minimizing downtime. To enhance visibility into system metrics, I helped maintain an Elasticsearch, Kibana, Logstash workflow with Kotlin for displaying a metrics dashboard. Additionally, I explored and implemented a move to PowerBI for the dashboard, further improving data visualization and analysis. Throughout these tasks, I grew my expertise in Python to write and maintain various scripts."
  }
]

// TODO: Trim down descriptions and put in icons for what I learned in each experience

export default function Experience() {
  return (
    <Box marginX="6%">
      <Typography variant="h2" textAlign="center" paddingY=".5em">
        Experience
      </Typography>
      <Grid container direction="column" spacing={4}>
        {/* Map Experiences to card items */}
        {experiences.map((experience) => {
          return (
            <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#eee" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" color={"primary.dark"}>{experience.title}</Typography>
                <Typography variant="subtitle2" color="#333">{experience.dateRange}</Typography>
                <Typography variant="body1">{experience.description}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}
