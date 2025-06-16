// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.jpeg';
import cssLogo from './assets/tech_logo/css.webp';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/React.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.webp';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bbdit from './assets/education_logo/bbdit.jpg';
import pms from './assets/education_logo/pms.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png';
import prepwise from './assets/work_logo/prep-wise.png';
import chess from './assets/work_logo/chess.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      //{ name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      //{ name: 'Postgre SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// export const experiences = [
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       "Bootstrap",
//       "Figma",
//       "Material UI",
//     ],
//   },
// ];

export const education = [
  {
    id: 1,
    img: bbdit,
    school: "BBDIT, Ghaziabad",
    date: "Sept 2022 - Aug 2026",
    grade: "8.7 CGPA",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 2,
    img: pms,
    school: "Priyanka Modern School",
    date: "Apr 2020 - March 2022",
    grade: "76%",
    degree: "CBSE(XII) - PCM with Information Technology",
  },
  {
    id: 3,
    img: pms,
    school: "Priyanka Modern School",
    date: "Apr 2018 - March 2020",
    grade: "90%",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio",
    description:
      "A responsive MERN stack portfolio showcasing my projects, skills, and testimonials.Built with Tailwind CSS, Framer Motion, and real- time MongoDB Atlas integration.Includes smooth animations, carousel, and a clean, mobile - friendly design.",
      image: portfolio,
  tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "MongoDB", "Express.js", "Node.js"],
  github: "",
  webapp: "",
    },
{
  id: 1,
    title: "Prep-Wise",
      description:
  "a project focused on creating a realistic interview simulation experience using AI. The core challenge was to seamlessly integrate various technologies – Vapi for voice interaction, Gemini AI for dynamic question generation, and Firebase for secure authentication and data management, all within a Next.js framework with TypeScript for type safety and Tailwind CSS for styling",
    image: prepwise,
      tags: ["Next.JS", "Firebase", "Express", "HTML", "Tailwind CSS", "TypeScript","Gemini AI","Vapi"],
        github: "https://github.com/Devkumar-web/Prep-Wise",
          webapp: "https://prep-wise-lovat.vercel.app/",
    },
{
  id: 2,
    title: "Custom Chess Game",
      description:
  "Custom-Chess-Game is an interactive chess game designed to be played in a web browser. It is built using Node.js for the backend and EJS for templating. The project provides a clean and responsive UI with customizable chess game features. It Support Multiplayer with real time updates",
    image: chess,
      tags: ["HTML", "CSS", "JavaScript","Node.js","Socket","Chess.Js"],
        github: "https://github.com/Devkumar-web/Custom-Chess-Game",
          webapp: "https://github.com/Devkumar-web/Custom-Chess-Game",
    },
  ];  