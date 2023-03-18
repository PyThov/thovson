import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import { IconLabel, RoundBorder } from "./common";
import {
  FaPython as PythonIcon,
  FaHtml5 as HTMLIcon,
  FaDocker as DockerIcon,
} from "react-icons/fa";
import {
  TbBrandGolang as GolangIcon,
  TbBrandCypress as CypressIcon,
  TbSql as SQLIcon,
} from "react-icons/tb";
import {
  IoLogoStencil as StencilIcon,
  IoLogoCss3 as CSSIcon,
} from "react-icons/io5";
import {
  SiJest as JestIcon,
  SiCsharp as CSharpIcon,
  SiJenkins as JenkinsIcon,
  SiReact as ReactIcon,
  SiTypescript as TypescriptIcon,
  SiJavascript as JavascriptIcon,
} from "react-icons/si";
import { FcLinux as LinuxIcon } from "react-icons/fc";

// This object defines the styles to align items to the center horizontally and vertically.
const centerFlex = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

// This interface defines a skill object that maps a string key to a JSX element.
interface ISkillDetails {
  [key: string]: JSX.Element;
}

// These objects define the frontend, backend, and tools skills, respectively.
const frontendSkills: ISkillDetails = {
  ReactJS: <ReactIcon color="#149eca" />,
  Typescript: <TypescriptIcon color="#3178c6" />,
  Javascript: (
    <JavascriptIcon color="#ffd740" style={{ backgroundColor: "black" }} />
  ),
  StencilJS: <StencilIcon />,
  HTML: <HTMLIcon color="orangered" />,
  CSS: <CSSIcon color="#2454e4" />,
  Cypress: <CypressIcon />,
  Jest: <JestIcon color="#922944" />,
};

const backendSkills: ISkillDetails = {
  Python: <PythonIcon />,
  Golang: <GolangIcon color="#35baf6" />,
  "C#": <CSharpIcon color="#15bf02" />,
  SQL: <SQLIcon color="#0276aa" />,
};

const tools: ISkillDetails = {
  Git: <GitHubIcon fontSize="inherit" />,
  Docker: <DockerIcon color="#0276aa" />,
  "Jenkins CI": <JenkinsIcon />,
  Linux: <LinuxIcon />,
};

// This interface defines an object that maps a string key to an ISkillDetails object.
interface ISkills {
  [key: string]: ISkillDetails;
}
const skills: ISkills = {
  Frontend: frontendSkills,
  Backend: backendSkills,
  Tools: tools,
};

// Skills is a React functional component that renders the above skills in a grid layout.
export default function Skills() {
  return (
    <Box color="neutral.contrastText" marginX="2vw" height="100%">
      {/* Top Label */}
      <Box>
        <Typography variant="h2" textAlign="center" marginBottom=".25em">
          Skills
        </Typography>
      </Box>
      {/* Container of skill categories */}
      <Grid container direction="column" spacing={8}>
        {Object.keys(skills).map((skillCategory) => {
          return (
            <Grid key={skillCategory} item xs={4}>
              <RoundBorder backgroundColor="primary.light">
                {/* Category Label */}
                <Typography variant="h3" textAlign="center" margin=".5em">
                  {skillCategory}
                </Typography>
              </RoundBorder>
              {/* Container of skills for a given category */}
              <Grid container justifyContent="center" spacing={3}>
                {Object.keys(skills[skillCategory]).map((key) => {
                  return (
                    <Grid key={key} item xs={4} sx={{ ...centerFlex }}>
                      <IconLabel title={key}>
                        {skills[skillCategory][key]}
                      </IconLabel>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
