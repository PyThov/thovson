import React from "react";
import { FaPython, FaHtml5, FaDocker } from "react-icons/fa";
import { TbBrandGolang, TbBrandCypress, TbSql } from "react-icons/tb";
import { IoLogoStencil, IoLogoCss3 } from "react-icons/io5";
import {
  SiJest,
  SiCsharp,
  SiJenkins,
  SiReact,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { GitHub as MuiGithub } from "@mui/icons-material";

export const CSSIcon = () => <IoLogoCss3 color="#2454e4" />;
export const CSharpIcon = () => <SiCsharp color="#15bf02" />;
export const CypressIcon = () => <TbBrandCypress />;
export const DockerIcon = () => <FaDocker color="#0276aa" />;
export const GolangIcon = () => <TbBrandGolang color="#6AD7E5" />;
export const GitHubIcon = () => <MuiGithub fontSize="inherit" />;
export const HTMLIcon = () => <FaHtml5 color="#E34C26" />;
export const JavascriptIcon = () => (
  <SiJavascript color="#F0DB4F" style={{ backgroundColor: "black" }} />
);
export const JenkinsIcon = () => <SiJenkins color="#D24939" />;
export const JestIcon = () => <SiJest color="#C21325" />;
export const LinuxIcon = () => <FcLinux />;
export const PythonIcon = () => <FaPython color="#3572A5" />;
export const ReactIcon = () => <SiReact color="#149eca" />;
export const SQLIcon = () => <TbSql color="#00758F" />;
export const StencilIcon = () => <IoLogoStencil color="#4D5156" />;
export const TypescriptIcon = () => <SiTypescript color="#007ACC" />;

export const SkillToIconMap = {
  CSS: <CSSIcon />,
  "C#": <CSharpIcon />,
  Cypress: <CypressIcon />,
  Docker: <DockerIcon />,
  Golang: <GolangIcon />,
  GitHub: <GitHubIcon />,
  HTML: <HTMLIcon />,
  Javascript: <JavascriptIcon />,
  Jenkins: <JenkinsIcon />,
  Jest: <JestIcon />,
  Linux: <LinuxIcon />,
  Python: <PythonIcon />,
  ReactJS: <ReactIcon />,
  SQL: <SQLIcon />,
  StencilJS: <StencilIcon />,
  Typescript: <TypescriptIcon />,
};
export type IconType = keyof typeof SkillToIconMap;
