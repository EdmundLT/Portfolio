// import moment from "moment";

// function countMonth(startDate) {
//   const month = {
//     Jan: 1,
//     Feb: 2,
//     Mar: 3,
//     Apr: 4,
//     May: 5,
//     Jun: 6,
//     Jul: 7,
//     Aug: 8,
//     Sep: 9,
//     Oct: 10,
//     Nov: 11,
//     Dec: 12,
//   };
//   return moment.format(startDate)
// }
/* =========== Nav =========== */
const navBar = {
  show: true,
};

/* =========== mainBody =========== */
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  name: "Edmund Tang",
  message: "Outstanding or Out",
  icons: [
    {
      image: "SiGithub",
      url: "https://github.com/EdmundLT",
    },
    {
      image: "SiLinkedin",
      url: "https://www.linkedin.com/in/longtang21/",
    },
    {
      image: "SiTwitter",
      url: "https://twitter.com/EdmundTL0921",
    },
    {
      image: "SiInstagram",
      url: "https://www.instagram.com/edmund_tangca/",
    },
  ],
};

/* =========== About =========== */
const about = {
  description:
    "My name is Long Tang. I am a student of Centennial College in Toronto, CA with a Diploma of Software Engineering. I'm passionate to learn everything related to tech and on my way to become a full stack software engineer. Besides software engineering, I am also interested in photography, graphic design and filmmaking. I have a youtube channel sharing my immigrant from Hong Kong to Canada and my life stories.",
  resume:
    "https://docs.google.com/document/d/1KTXo5gSGd3eptt0KtiYrA9LrTXNWjHMLw3Mi1K1bAv4/edit?usp=sharing",
  me: require("../assets/images/me.jpg"),
};

/* =========== Education =========== */
const education = {
  school: "Centennial College",
  location: "Toronto CA",
  program: "Diploma of Software Engineering",
  startDate: "Jan 2022",
  gradDate: "Present (Grad in Apr 2023)",
};
const courses = [
  {
    courseCode: "COMP100",
    description: "C# Programming 1",
  },
  {
    courseCode: "COMP213",
    description: "Web Design",
  },
  {
    courseCode: "COMP120",
    description: "Sw Eng Fund",
  },
  {
    courseCode: "COMP123",
    description: "C# Programming 2",
  },
  {
    courseCode: "COMP122",
    description: "DB Concept",
  },
  {
    courseCode: "COMP125",
    description: "Client-Side Web Dev",
  },
  {
    courseCode: "COMP225",
    description: "Sw Requirement",
  },
  {
    courseCode: "COMP301",
    description: "Unix OS",
  },
];

/* =========== Experiences =========== */

const exp = [
  {
    title: "IT Technician",
    company: "Kyndryl",
    logo: require("../assets/images/kyndryl.jpeg"),
    location: "Toronto CA",
    type: "Contract Part-time",
    startDate: "JUL 2022",
    endDate: "Present",
    duration: "1 mos",
  },
  {
    title: "Site Assistant",
    company: "Lap Kai Engineering Company Limited",
    location: "Hong Kong",
    logo: require("../assets/images/download.png"),
    type: "Contract Full-time",
    startDate: "Mar 2019",
    endDate: "Mar 2020",
    duration: "1yr 1mo",
  },
];
/* =========== Project =========== */
const project = [
  {
    projectTitle: "My portfolio",
    projectImg: require("../assets/images/portfolio.png"),
    projectDescription:
      "This is my person website built in React, Tailwind CSS, Material UI",
    projectRepo: "https://github.com/EdmundLT/EdmundLT.github.io",
    livedemo: "https://edmundlt.tech",
  },
  {
    projectTitle: "Meet me",
    projectImg: require("../assets/images/meetme.png"),
    projectDescription:
      "Whatsapp Clone web application project with Next.JS, Google Firebase, styled-components, Google Authentication",
    projectRepo: "https://github.com/EdmundLT/meet-me",
    livedemo: "https://meet-me-five.vercel.app/",
  },
  {
    projectTitle: "Stocker.io",
    projectImg: require("../assets/images/Stockio.png"),
    projectDescription:
      "Fullstack Stock watching web application project with Next.JS, APIs, SSR, Firebase, Tailwind CSS, Google Authentication",
    projectRepo: "https://github.com/EdmundLT/next-stocker",
    livedemo: "https://stocker-io.vercel.app/",
  },
];
/* =========== Skills =========== */

const backEnd = [
  {
    name: "Python",
    level: "Intermediate",
    score: 80,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    score: 75,
  },
  {
    name: "C#",
    level: "Basic",
    score: 55,
  },
  {
    name: "Express.js",
    level: "Intermediate",
    score: 80,
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
    name: "MongoDB",
    level: "Intermediate",
    score: 70,
  },
  {
    name: "GrpahQL",
    level: "Basic",
    score: 55,
  },
];
const frontEnd = [
  {
    name: "React.JS",
    level: "Intermediate",
    score: 80,
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
    name: "HTML / CSS / JS",
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
  email: "edmundtlca@gmail.com",
  sendemail: "mailto:edmundtlca@gmail.com",
};
/* =========== Footer =========== */

/* =========== Export =========== */

export {
  navBar,
  mainBody,
  about,
  education,
  courses,
  exp,
  project,
  backEnd,
  frontEnd,
  dataAnalysis,
  contact,
};
