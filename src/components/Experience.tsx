import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

interface IExperience {
  when: string;
  description: string;
}

const experiences = {
  HPE: {
    "Cloud Software Engineer II": {
      when: "May 2022 -> Present",
      description:
        "Working as a team that's part of the larger Storage organization to build, deliver, and maintain microservices for the organization's cloud application. Utilizing and learning many technologies.",
    },
  },
};

export default function Experience() {
  return (
    <Box marginX="6%">
      <Typography variant="h2" textAlign="center" paddingY=".5em">
        Experience
      </Typography>
      <Grid container direction="column">
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#eee" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5">Work</Typography>
                <Typography variant="subtitle1">year to year</Typography>
              </Box>
              <Typography variant="body1">I did all the things</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
