import user from './components/user.jpg';
import konfhub from './pages/data/konfhub.png'
import recibo from './pages/data/Recibo-logo-2.png'
import eazy from './pages/data/eazyerp-20240729120010.png'
import vit from './pages/data/vit.png';
import pcmcs from './pages/data/pcmcs.webp';
import mh from './pages/data/boardlogo.svg'

import nodejs from './pages/data/Skill/nodejs.svg';
import reactIcon from './pages/data/Skill/react.svg';
import mysql from './pages/data/Skill/mysql.svg';
import postgres from './pages/data/Skill/postgresql.svg';
import polymer from './pages/data/Skill/polymer.svg';
import python from './pages/data/Skill/python.svg';
import aws from './pages/data/Skill/aws.svg';
import js from './pages/data/Skill/js.png';
import sequelize from './pages/data/Skill/sequelize.svg';
import graphql from './pages/data/Skill/graphql.svg';
import bootstrap from './pages/data/Skill/bootstrap.svg';
import php from './pages/data/Skill/php.svg';
import c from './pages/data/Skill/c.png';
import cpp from './pages/data/Skill/c-logo.png'
import html from './pages/data/Skill/html.svg';
import css from './pages/data/Skill/css.svg'

import fullStack from './pages/data/Skill//AjayRajendraWaghMarch2024.pdf'
const userData = {
  name: "Ajay Rajendra Wagh",
  position: "Full Stack Developer",
  location: "Manmad, Maharashtra, India",
  locationUrl: "https://www.google.com/maps/place/20%C2%B015'40.8%22N+74%C2%B026'22.2%22E/@20.261324,74.43951,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.261324!4d74.43951?entry=ttu",
  email: "ajaywagh2298@gmail.com",
  phone: "+91 - 8605473682",
  github: "https://github.com/Ajaywagh2298",
  linkedin: "https://www.linkedin.com/in/ajaywagh2298/",
  instagram: "",
  image: user
};

const experienceData = [
  {
    designation: "Node JS Engineer",
    companyName: "Konfhub Technology Pvt Ltd",
    companyLogo: konfhub,
    startDate: '2022-03-02',
    endDate: '2022-07-30',
    skill: 'Node Js, Mysql, AWS, Serverless, AWS Lamda, React JS',
    details: "Collaborated with software development and testing teams to create robust solutions that met client needs for functionality, scalability, and performance. Reviewed project specifications and designed technology solutions that often surpassed performance expectations. Delivered unit-tested systems on time and developed scalable, modular, and API-centric infrastructures."
  }, {
    designation: "Software Engineer",
    companyName: "Recibo Technologies pvt ltd",
    companyLogo: recibo,
    startDate: '2022-09-12',
    endDate: 'Present',
    skill: 'Node Js, Mysql, AWS, Polymer JS, GraphQL, Sequelize, ag-grid',
    details: "Collaborated with management and development partners on software design and project progress. Developed scalable, modular, and API-centric infrastructures. Analyzed customer needs, assessed vendor costs, and designed technology solutions that met or exceeded performance expectations."
  }, {
    designation: "Software Engineer",
    companyName: "Eazy ERP Technologies Pvt Ltd",
    companyLogo: eazy,
    startDate: '2023-11-01',
    endDate: 'Present',
    skill: 'Node Js, Mysql, AWS, Polymer JS, GraphQL, Sequelize, ag-grid',
    details: "Collaborated with management and development partners on software design and project progress. Developed scalable, modular, and API-centric infrastructures. Analyzed customer needs, assessed vendor costs, and designed technology solutions that met or exceeded performance expectations."
  }
];

const educationData = [
  {
    degree: "Masters in Computer Application",
    institution: "Vishwakarma Institute of Technology (VIT)",
    period: "2020 - 2022",
    details: "Graduated with honors, focusing on software development...",
    total: 2,
    imageURL: vit
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2017 - 2020",
    details: "Graduated with honors, focusing on software development...",
    total: 3,
    imageURL: pcmcs
  }, {
    degree: "Higher Secondary Certificate ( XII )",
    institution: "Maharashtra State Board",
    period: "2014 - 2015",
    details: "Graduated with honors, focusing on software development...",
    total: 1,
    imageURL: mh
  }, {
    degree: "Secondary Certificate ( X )",
    institution: "Maharashtra State Board",
    period: "2012 - 2013",
    details: "Graduated with honors, focusing on software development...",
    total: 1,
    imageURL: mh
  }
];

const skillsData = [
  {
    name: "Node JS",
    level: 5,
    icon: nodejs,
  }, {
    name: "MySQL",
    level: 5,
    icon: mysql,
  }, {
    name: "JavaScript",
    level: 5,
    icon: js,
  }, , {
    name: "HTML",
    level: 5,
    icon: html,
  }, {
    name: "CSS",
    level: 5,
    icon: css,
  }, {
    name: "GrapghQL",
    level: 4,
    icon: graphql,
  }, {
    name: "C",
    level: 4,
    icon: c,
  }, {
    name: "C++",
    level: 4,
    icon: cpp,
  }, {
    name: "Sequelize",
    level: 4,
    icon: sequelize,
  }, {
    name: "Boostrap",
    level: 4,
    icon: bootstrap,
  }, {
    name: "React JS",
    level: 3,
    icon: reactIcon,
  }, {
    name: "PHP",
    level: 3,
    icon: php,
  }, {
    name: "Postgres SQL",
    level: 3,
    icon: postgres,
  }, {
    name: "Ploymer JS",
    level: 2,
    icon: polymer,
  }, {
    name: "AWS",
    level: 2,
    icon: aws,
  }, {
    name: "Python",
    level: 1,
    icon: python,
  }, {
    name: "React Native",
    level: 1,
    icon: reactIcon,
  }
];

const certificationsData = [
  {
    title: "Certification Title",
    details: "Certification details..."
  }
  // Add more certifications as needed
];

const projectsData = [
  {
    name: "Nirbhaya",
    startDate: "Aug 2019",
    endDate: "Apr 2020",
    githubLink: "https://github.com/Ajaywagh2298/Nirbhaya",
    details: [`Developed an application aimed at enhancing the safety of commuters, especially females, by providing a platform to raise alarms that can be tracked and managed by security agencies.`],
    pdf: "",
    techStack : ['PHP', 'Bootstrap', 'Ajax', 'MySQL', 'Google Map API', 'Local Text']
  }
];

let resumeList = [{
  position: 'Full Stack',
  link: fullStack
}, {
  position: 'Backend Developer',
  link: fullStack
}, {
  position: 'Software Engineer',
  link: fullStack
}]

export {
  userData,
  experienceData,
  educationData,
  skillsData,
  certificationsData,
  projectsData,
  resumeList
};
