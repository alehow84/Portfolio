//create objects for skills and tech stack 1 & 2 containing each name and file name for the skill or tech stack
//in Skills.tsx, for each object, iterate over and create the html structure I want
//this is currently unused

interface SkillsObj {
  name: string;
  fileName: string;
}

const SkillsRow1: { [key: string]: SkillsObj } = {
  Agile: { name: "Agile", fileName: "/icons/skills/agile.svg" },
  Technical: {
    name: "Technical Comms",
    fileName: "/icons/skills/technical-comms.svg",
  },
  Programming: {
    name: "Pair & Mob Programming",
    fileName: "/icons/skills/programming.svg",
  },
  Node: {
    name: "Node.js",
    fileName: "/icons/techstack/node-js.svg",
  },
};

const SkillsRow2: { [key: string]: SkillsObj } = {
  Javascript: {
    name: "Javascript",
    fileName: "/icons/techstack/javascript.svg",
  },
  HTML: {
    name: "HTML",
    fileName: "/icons/techstack/html.svg",
  },
  CSS: {
    name: "CSS",
    fileName: "/icons/techstack/css.svg",
  },
  Tailwind: {
    name: "Tailwind.js",
    fileName: "/icons/techstack/tailwind.svg",
  },
};

const SkillsRow3: { [key: string]: SkillsObj } = {
  Typescript: {
    name: "Typescript",
    fileName: "/icons/techstack/typescript.svg",
  },
  React: {
    name: "React",
    fileName: "/icons/techstack/React.svg",
  },
  ReactNative: {
    name: "React Native",
    fileName: "/icons/techstack/react-native.svg",
  },
  Nextjs: {
    name: "Next.js",
    fileName: "/icons/techstack/next-js.svg",
  },
};

const SkillsRow4: { [key: string]: SkillsObj } = {
  Express: {
    name: "Express",
    fileName: "/icons/techstack/express.svg",
  },
  PostgresSql: {
    name: "PostgresSql",
    fileName: "/icons/techstack/sql.svg",
  },
  Firebase: {
    name: "Firebase",
    fileName: "/icons/techstack/firebase.svg",
  },
  Jest: {
    name: "Jest",
    fileName: "/icons/techstack/jest.svg",
  },
};

export { SkillsRow1, SkillsRow2, SkillsRow3, SkillsRow4 };
