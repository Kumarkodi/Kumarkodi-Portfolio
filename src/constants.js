// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import githubCopilotLogo from './assets/tech_logo/github-copilot.png';
import chatgptLogo from './assets/tech_logo/chatgpt-logo.png';
import deepseekLogo from './assets/tech_logo/deepseek-ai-logo.png';
import perplexityLogo from './assets/tech_logo/perplexity-logo.png';

// Experience Section Logo's
import tamLogo from './assets/company_logo/tamlogo.jpeg';

// Education Section Logo's
import siws_logo from './assets/education_logo/siws_logo.png';
import Muktangan_logo from './assets/education_logo/Muktangan_logo.jpg';
import vidyalankarLogo from './assets/education_logo/vidyalankarLogo.png';

// Project Section Logo's
import hoodieLogo from './assets/work_logo/hoodieLogo.png';
import HLogo from './assets/work_logo/HLogo.png';
import FCLogo from './assets/work_logo/FCLogo.png';
import BGLogo from './assets/work_logo/BGLogo.png';
import TBLogo from './assets/work_logo/TBLogo.png';
import WordWizard from './assets/work_logo/WordWizard.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'GitHub Copilot', logo: githubCopilotLogo },
      { name: 'ChatGPT', logo: chatgptLogo },
      { name: 'Perplexity', logo: perplexityLogo },
      { name: 'Deepseek', logo: deepseekLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: tamLogo,
      role: "Content Analyst Intern",
      company: "TAM Media Research Pvt. Ltd.",
      date: "December 2024 - March 2025",
      desc: "Reviewed 30+ TV shows weekly, analyzing key metrics for media research. Compiled reports in Excel, updated weekly TVR data, and ensured timely, accurate insights for senior analysts and strategy.",
      skills: [
        "Microsoft Excel",
        "Report writing",
        "Team Collaboration",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: siws_logo,
      school: "SIWS College of Science",
      date: "August 2022 - July 2024",
      grade: "Awaiting",
      desc: "I have completed my Master's degree (M.Sc. IT) in Information Technology from Mumbai University, Mumbai. During my time at SIWS College, I gained a foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
      degree: "Master of Science - M.Sc. (Information Technology)",
    },
    {
      id: 1,
      img: siws_logo,
      school: "SIWS College of Science",
      date: "August 2019 - February 2022",
      grade: "7.17 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from SIWS College of Science, Mumbai. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vidyalankarLogo,
      school: "Bhavani Shankar Road Junior College of Science",
      date: "April 2017 - March 2019",
      grade: "52.31%",
      desc: "I completed my class 12 education from Bhavani Shankar Road Junior College of Science, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electrical Maintenance.",
      degree: "HSC(XII) - PCM with Electrical Maintenance",
    },
    {
      id: 3,
      img: Muktangan_logo,
      school: "Muktangan School, NGO, Mumbai",
      date: "Apr 2016 - March 2017",
      grade: "61.60%",
      desc: "I completed my class 10 education from Muktangan School, under the SSC board.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Hoodie Landing Page",
      description:
        "A modern, visually appealing landing page for a hoodie e-commerce store, built using HTML and CSS.",
      image: hoodieLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Kumarkodi/Hoodie_Landing_Page",
      webapp: "https://kumarkodi.github.io/Hoodie_Landing_Page/",
    },
    {
      id: 1,
      title: "IMG Background Remover",
      description:
        "A simple web application for removing the background from images using the bg.remove API. Built with pure HTML, CSS, and JavaScript — no frameworks required!",
      image: BGLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Kumarkodi/IMG-Background_Remover",
      webapp: "https://img-background-remover-ten.vercel.app/",
    },
    {
      id: 2,
      title: "Hangman Game",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: HLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kumarkodi/HANGMAN-GAME",
      webapp: "https://kumarkodi.github.io/HANGMAN-GAME/",
    },
    {
      id: 3,
      title: "The B@rber",
      description:
        "The B@rber is a simple and elegant web project showcasing the landing page of a barber shop. It features sections like Experience, Services, About, and a social media follow area, all styled for a clean and professional look.",
      image: TBLogo,
      tags: ["Html", "CSS"],
      github: "https://github.com/Kumarkodi/The_B-rber",
      webapp: "https://the-b-rber.vercel.app/",
    },
    {
      id: 4,
      title: "Flip The Card",
      description:
        "A simple interactive web project that demonstrates a \"flip card\" effect using only HTML, CSS, and JavaScript. This project is perfect for beginners looking to improve their front-end skills or for anyone who wants to add a stylish flip card component to their website.",
      image: FCLogo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Kumarkodi/Flip-The-Card",
      webapp: "https://flip-the-card.vercel.app/",
    },
    {
      id: 5,
      title: "WordWizard",
      description:
        "A simple interactive web project that helps users improve their vocabulary and word usage through engaging activities and challenges.",
      image: WordWizard,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Kumarkodi/WordWizard",
      webapp: "https://kumarkodi.github.io/WordWizard/",
    },
  ];  