interface IHomeCards {
  [title: string]: string[];
}

export interface IPageDetail {
  [title: string]: string | string[];
}

export const GOALS: IPageDetail = {
  "Strong fullstack software engineer career":
    "Maintain a career as a fullstack software engineer while continously learning and applying new technologies.",
  "Help others learn about basic finance":
    "Financial education is lacking in our world. I'd like to help people learn more about money and the economy.",
  "Help others learn to code":
    "Coding is such a wonderful and powerful tool. It's a logistic art form. I'd like to help others learn how to code through Youtube videos, and potentially other forms.",
  "Freelance Coding":
    "I enjoy coding a lot. I often desire to keep coding outside of work, but I don't always have a project to work on. To fill this gap and continue my learning, I am considering freelancing.",
};

export const RESUME: IPageDetail = {
  "Fullstack Cloud Software Engineer II":
    "I've been working with HPE as a software engineer since June 2020. I've learned so much and there is no limit to the amount I can continue to learn." +
    "Currently, I am working primarily with React (Typescript) and Golang, while using various other tools for testing and continuous integration. ",
  "Bachelor of Science in Computer Science":
    "Graduated from University of Colorado, Colorado Springs (UCCS) in May 2021.",
};

export const PROJECTS: IPageDetail = {
  TBD: "",
};

export const SKILLS: IPageDetail = {
  "Frontend Technologies": ["Typescript", "Javascript", "React", "CSS", "HTML"],
  "Backend Technologies": ["Golang", "Python", "C#"],
  Miscellaneous: ["Git", "Docker", "Cypress", "Jest", "Linux"],
};

export const ABOUT: IPageDetail = {
  "Software Engineer":
    "I've been enjoying coding since 2016, starting with highschool courses and growing into a fulfilling career. I enjoy all parts of a project; back-end to front-end. My only hope is for some more side-projects outside of work.",
  Gamer:
    "I started with Roller Coaster Tycoon, now I mostly play League of Legends and Factorio.",
  "Guitar Player": "<Insert Guitar Solo Here> Electric / Acoustic",
};

export const HOME_CARDS: IHomeCards = {
  goals: Object.keys(GOALS),
  resume: Object.keys(RESUME),
  projects: Object.keys(PROJECTS),
  about: Object.keys(ABOUT),
  skills: Object.keys(SKILLS),
};

export const FOOTER = `Made with Vite + React + Typescript`;
