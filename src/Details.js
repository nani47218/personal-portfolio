// Enter all your details in this file

// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import python from "./assets/techstack/python.jpg";
import vscode from "./assets/techstack/vscode.png";
import pandas from "./assets/techstack/pandas.png";
import numpy from "./assets/techstack/numpy.png";
import msexcel from "./assets/techstack/msexcel.jpeg";
import r from "./assets/techstack/R.jpg";
import tailwind from "./assets/techstack/tailwind.png";
import tableau from "./assets/techstack/tableau.jpg";
import seaborn from "./assets/techstack/seaborn.png";
import scikitlearn from "./assets/techstack/scikit.jpg";
import sql from "./assets/techstack/SQL.jpg";
import git from "./assets/techstack/git.png";
import React from "./assets/techstack/react.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";


// Enter your Personal Details here
export const personalDetails = {
  name: "Ganji Prem Kumar",
  tagline: "Front End Developer & Data Scientist",
  img: profile,
  about: `Hello! I'm Prem Kumar, a third-year Computer Science and Engineering student with a deep passion for both frontend development and data science. I am eager to apply my skills and knowledge to real-world challenges.
  As a frontend developer, I specialize in crafting intuitive and engaging user interfaces. My expertise spans HTML, CSS, JavaScript, and React, complemented by certifications from Meta. I've worked on various projects, where I focus on delivering seamless user experiences. My approach combines technical proficiency with a keen eye for design to ensure that each project is both functional and aesthetically pleasing`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/prem-kumar-710241212/",
  github: "https://www.github.com/nani47218",
  twitter: "https://twitter.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Data Science Intern",
    Company: `Celebal Technologies`,
    Location: "Remote",
    Type: "Internship",
    Duration: "May 2024 - July 2024",
    Description:"Utilized programming languages such as Python extensively throughout the internship applying relevant libraries and frameworks when appropriate. Performed advanced data extraction and data manipulation. Developed and coded software programs, algorithms and automated processes to cleanse and evaluate large datasets from multiple disparate sources. Managed multiple projects simultaneously, demonstrating strong time management and prioritization skills under tight deadlines. Developed custom algorithms to solve unique challenges in data analysis and modeling"
  },
  {
    Position: "Web Development Intern",
    Location: "Remote",
    Type: "Internship",
    Duration: "May 2024 - June 2024",
    Description: "Utilized programming languages such as JavaScript, HTML, and CSS to develop and maintain"
  },
  {
    Position: "Internship",
    Company: `KPMG`,
    Location: "Remote",
    Type: "Virtual Internship",
    Duration: "January 24 - May 24",
    Description: " Completed a simulation focused on advising a client on customer targeting with the Data, Analytics & Modelling team Assessed data quality and completeness in preparation for analysis Analysed data to target high-value customers based on demographics and attributes Developed dashboards to communicate findings with visuals"
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in computer Science and Engineering",
    Company: `Lovely Professional University`,
    Location: "Jalandhar",
    Duration: "Aug 2021 - Present",
  },
  {
    Position: "Intermediate",
    Company: `Sarada Educational Institutions`,
    Location: "Vijayawada",
    Duration: "June 2019 - March 2021",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  r:r,
  pandas:pandas,
  numpy:numpy,
  seaborn:seaborn,
  scikitlearn:scikitlearn,
  sql:sql,
  tailwind:tailwind,  
  msexcel:msexcel,
  tableau:tableau,
  react: React,
  python:python,
  vscode: vscode,
  git: git,
  
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "GYM Website",
    image:projectImage4,
    description:`Designed the front-Developed the front-end of the Gold-Gym website using HTML, CSS, and JavaScript. The site features detailed information on services, membership plans, trainer profiles, and upcoming events. Ensured responsive design and cross-browser compatibility. Collaborated with stakeholders to meet requirements and enhance user engagement. Delivered a polished website that improved Gold-Gym's online presenceend of a Gym Website using HTML and CSS, and applied JavaScript to enhance the design Gaining skills that can be applied to building interactive and visually appealing web applications`,
    techstack: `HTML CSS JavaScript`,
    githubLink:"https://github.com/nani47218/GYM-Website-"
  },
  {
    title: "macOS Calculator",
    image:projectImage5,
    description:`Created a macOS calculator application using React, designed to provide a smooth and interactive user experience for performing basic arithmetic operations. The application features a modern, user-friendly interface that mimics a traditional calculator layout, and leverages React’s component-based architecture for efficient state management and dynamic rendering.`,
    techstack:`React ,CSS, Javascript, HTML`,
    githubLink:"https://github.com/nani47218/macOs-Calculator",
    liveLink:"https://nani47218.github.io/macOs-Calculator/"
  },
  {
    title:"personal portfolio",
    image:projectImage6,
    description:`Developed a personal portfolio website using React to showcase my projects, skills, and achievements in a professional and interactive manner. The website serves as a digital resume and portfolio, allowing visitors to explore my work, learn about my technical skills, and contact me for potential opportunities. 
    Responsive Design: Adapts to different screen sizes and devices, ensuring a consistent user experience across desktop, tablet, and mobile views.`,
    techstack:`React, HTML, CSS, JavaScript`,
    githubLink:"https://github.com/nani47218/react-portfolio",
    liveLink:"https://nani47218.github.io/react-portfolio/"
  },
  {
    title: "Car Sales Dashboard",
    image: projectImage1,
    description: `Developed a comprehensive dashboard to analyze car sales data,providing into sales volume,revenue,geographic distribution, etc.
Assisted in data analysis and interpretation to support business decision- making process.
Enabled data driven strategies, leading to a significant boost in sales and customer engagement.The data-driven approach resulted in improved sales.
Increased user engagement with the dashboard by 40%, as measured by user interactions and feedback.`,
    techstack: "Tableau",
    githubLink: "https://github.com/nani47218/datascience-projects-/blob/main/car%20sales%20dashboard.twb",
  },
  {
    title: "Employee Compensation Analysis",
    image: projectImage2,
    description: `Developed a dynamic Employee Compensation Dashboard leveraging Tableau aimed at a comprehensive examination of employee compensation trends across years, categorized by organization and job roles. -Remarkably, the analysis unveiled a significant decline of over 50% in compensation from 2015 to 2016. -Additionally, it shed light on the disparity where a majority of public workers lacked entitlement to health services.`,
    techstack: "Tableau",
    githubLink: "https://github.com/nani47218/datascience-projects-/blob/main/Employee%20Compensation%20Analysis.twbx",
  },
  {
    title: "Heart Disease Exploration",
    image: projectImage3,
    description: `Conducted data loading, cleaning, and preliminary analysis to understand dataset characteristics..
Implemented descriptive statistics to summarize dataset features and distributions.
Developed insightful visualizations (e.g., histograms, box plots, and count plots) to identify patterns related to heart disease
prevalence and age distribution.
Applied Python programming skills to manipulate data effectively and present findings clearly`,
    techstack: "Python(pandas,numpy,seaborn)",
    githubLink: "https://github.com/nani47218/Heart-Disease-Exploration",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nani47218@gmail.com",
  phone: "+91 9347261559",
};
