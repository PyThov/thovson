
interface IHomeCards {
    [title: string]: string
}


const GOALS = 
`- Strong software development career
- Grow a business building websites
- Help others learn about basic finance
- Continue learning in development and economics`

const RESUME =
`- Fullstack Cloud Software Engineer II
- Bachelor of Science in Computer Science`

export const HOME_CARDS: IHomeCards = {
    "goals": GOALS,
    "resume": RESUME,
    "projects": "projects summary",
    "about": "about summary",
}

export const FOOTER = `Made with Vite + React + Typescript`
