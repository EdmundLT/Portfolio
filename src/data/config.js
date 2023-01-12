/* =========== Nav =========== */
const elementControl = {
  navBar: true,
  headerTextAnimation: true,
};

/* =========== Header Content =========== */
const headerContent = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  name: "Edmund Tang",
  message: "Outstanding or Out",
  SnUrl: {
    github: "https://github.com/EdmundLT",
    linkedIn: "https://www.linkedin.com/in/longtang21/",
    twitter: "https://twitter.com/EdmundTL0921",
    instagram: "https://www.instagram.com/edmund_tangca/",
    youtube: "https://edmundlt.tech/youtube",
  },
};

/* =========== About =========== */
const about = {
  description:
    "My name is Long Tang. I am a student of Centennial College in Toronto, CA with a Diploma of Software Engineering. I'm passionate to learn everything related to tech and on my way to become a backEnd software engineer. Besides software engineering, I am also interested in photography, graphic design and filmmaking. I have a youtube channel sharing my immigrant from Hong Kong to Canada and my life stories.",
  resume:
    "https://docs.google.com/document/d/1KTXo5gSGd3eptt0KtiYrA9LrTXNWjHMLw3Mi1K1bAv4/edit?usp=sharing",
  me: require("../assets/images/me.jpg"),
};

/* =========== Education =========== */
const education = {
  school: "Centennial College",
  location: "Toronto CA",
  logo: require("../assets/images/Centennial_College.png"),
  program: "Diploma of Software Engineering",
  startDate: "Jan 2022",
  gradDate: "Grad in Apr 2023",
};

/* =========== Experiences =========== */

const exp = [
  {
    title: "IT Technician",
    company: "Royal Bank Canada",
    logo: require("../assets/images/rbc-logo.jpg"),
    coUrl: "https://www.rbcroyalbank.com/personal.html",
    location: "Toronto, CA",
    type: "Contract Full-time",
    startDate: "JUL 2022",
    endDate: "Present",
    duration: "7 months",
  },
  {
    title: "Site Assistant",
    company: "Lap Kai Eng Co Limited",
    coUrl: "http://www.lapkai.com/",
    location: "Hong Kong",
    logo: require("../assets/images/download.png"),
    type: "Contract Full-time",
    startDate: "Mar 2019",
    endDate: "Mar 2020",
    duration: "1 yr 1 month",
  },
];
/* =========== Project =========== */
const project = [
  {
    projectTitle: "Fake Financial Data API",
    projectImg: require("../assets/images/ffd.png"),
    projectDescription:
      `Free API builds for testing and data analysis practice. 
      Stacks: React, Express, PostgreSQL, API, Jest (Unit Test).
      Project and Server deploy on AWS EC2 and RDS.`,
    projectRepo: "https://github.com/EdmundLT/fake-financial-data-io",
    livedemo: "http://ffd-api.click/",
  },
  {
    projectTitle: "Clipz",
    projectImg: require("../assets/images/clipz.png"),
    projectDescription:
      "Video sharing application in Angular 14 and Google Firebase Storage, Database and Authentications.",
    projectRepo: "https://github.com/EdmundLT/Clips",
    livedemo: "https://clipz-blond.vercel.app/",
  },
  {
    projectTitle: "Stocker.io",
    projectImg: require("../assets/images/Stockio.png"),
    projectDescription:
      "Fullstack Stock watching web application project with Next.JS, APIs, SSR, Firebase, Tailwind CSS, Google Authentication",
    projectRepo: "https://github.com/EdmundLT/next-stocker",
    livedemo: "https://stocker-io.vercel.app/",
  },
  {
    projectTitle: "Used Good Store",
    projectImg: require("../assets/images/ugs.png"),
    projectDescription:
      "Student Project - developed a used-product trading platform in MEAN Stack",
    projectRepo: "https://github.com/EdmundLT/the-goods-store",
    livedemo: "https://used-good-store.vercel.app/",
  },
];
/* =========== Skills =========== */

const backEnd = [
  {
    name: "Express.JS",
    level: "Experienced",
    score: 80,
  },
  {
    name: "Node.JS",
    level: "Experienced",
    score: 80,
  },
  {
    name: "Python",
    level: "Intermediate",
    score: 80,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    score: 75,
  },
  {
    name: "C#",
    level: "Basic",
    score: 60,
  },
  {
    name: "SQL",
    level: "Basic",
    score: 65,
  },
  {
    name: "Flask",
    level: "Intermediate",
    score: 75,
  },
  {
    name: "Web Scrapping",
    level: "Intermediate",
    score: 80,
  },
  {
    name: "GrpahQL",
    level: "Basic",
    score: 55,
  },
];
const frontEnd = [
  {
    name: "Angular 14",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "React.JS",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "Next.JS",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    score: 75,
  },
  {
    name: "HTML / CSS JS",
    level: "Intermediate",
    score: 75,
  },
  {
    name: "JQuery",
    level: "Basic",
    score: 60,
  },
  {
    name: "TypeScript",
    level: "Basic",
    score: 50,
  },
];
const dataAnalysis = [
  {
    name: "Selenium",
    level: "Intermediate",
    score: 85,
  },
  {
    name: "Pandas",
    level: "Intermediate",
    score: 80,
  },
  {
    name: "matplotlib",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "Seaborn",
    level: "Basic",
    score: 55,
  },
];
/* =========== Contact =========== */

const contact = {
  message:
    "Currently looking for part-time devs opportunities, contact me if you have available position, thanks!",
  email: "edmundtl.work@gmail.com",
  sendemail: "mailto:edmundtl.work@gmail.com",
};
/* =========== Footer =========== */

/* =========== Export =========== */

export {
  elementControl,
  headerContent,
  about,
  education,
  exp,
  project,
  backEnd,
  frontEnd,
  dataAnalysis,
  contact,
};

