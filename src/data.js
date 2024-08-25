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
import udemy from './pages/data/Skill/udemy.png';
import forage from './pages/data/Skill/theforage_logo.jpeg'
import csi from './pages/data/Skill/csi.png'

import fullStack from './pages/data/Skill/AjayRajendraWaghMarch2024.pdf'

import p1 from './pages/data/images/p1.jpeg';
import p2 from './pages/data/images/p2.jpeg';
import p3 from './pages/data/images/p3.jpeg';
import p4 from './pages/data/images/p4.jpeg';
import p5 from './pages/data/images/p5.jpeg';
import p6 from './pages/data/images/p6.jpeg';
import p7 from './pages/data/images/p7.jpeg';
import p8 from './pages/data/images/p8.jpeg';
import p9 from './pages/data/images/p9.jpeg';
import p10 from './pages/data/images/p10.jpeg';
import p11 from './pages/data/images/p11.jpeg';
import p12 from './pages/data/images/p12.jpeg';
import p13 from './pages/data/images/p13.jpeg';
import p14 from './pages/data/images/p14.jpeg';
import p15 from './pages/data/images/p15.jpeg';
import p16 from './pages/data/images/p16.jpeg';
import p17 from './pages/data/images/p17.png';

const userData = {
  name: "Ajay Rajendra Wagh",
  position: "Full Stack Developer",
  location: "Pune, Maharashtra, India",
  locationUrl: "https://www.google.com/maps/place/20%C2%B015'40.8%22N+74%C2%B026'22.2%22E/@20.261324,74.43951,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.261324!4d74.43951?entry=ttu",
  email: "ajaywagh2298@gmail.com",
  phone: "+91 - 8605473682",
  github: "https://github.com/Ajaywagh2298",
  linkedin: "https://www.linkedin.com/in/ajaywagh2298/",
  instagram: "https://www.instagram.com/ajay_wagh_2298?utm_source=qr&igsh=MXI1cnd0enBmMDBzYQ==",
  image: user
};

const experienceData = [
  {
    designation: "Software Engineer",
    companyName: "Eazy ERP Technologies Pvt Ltd",
    companyLogo: eazy,
    startDate: '2023-11-01',
    endDate: 'Present',
    skill: 'Node Js, Mysql, AWS, Polymer JS, GraphQL, Sequelize, ag-grid',
    details: "Collaborated with management and development partners on software design and project progress. Developed scalable, modular, and API-centric infrastructures. Analyzed customer needs, assessed vendor costs, and designed technology solutions that met or exceeded performance expectations."
  }, {
    designation: "Software Engineer",
    companyName: "Recibo Technologies pvt ltd",
    companyLogo: recibo,
    startDate: '2022-09-12',
    endDate: 'Present',
    skill: 'Node Js, Mysql, AWS, Polymer JS, GraphQL, Sequelize, ag-grid',
    details: "Collaborated with management and development partners on software design and project progress. Developed scalable, modular, and API-centric infrastructures. Analyzed customer needs, assessed vendor costs, and designed technology solutions that met or exceeded performance expectations."
  }, {
    designation: "Node JS Engineer",
    companyName: "Konfhub Technology Pvt Ltd",
    companyLogo: konfhub,
    startDate: '2022-03-02',
    endDate: '2022-07-30',
    skill: 'Node Js, Mysql, AWS, Serverless, AWS Lamda, React JS',
    details: "Collaborated with software development and testing teams to create robust solutions that met client needs for functionality, scalability, and performance. Reviewed project specifications and designed technology solutions that often surpassed performance expectations. Delivered unit-tested systems on time and developed scalable, modular, and API-centric infrastructures."
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
  }
  // , {
  //   degree: "Higher Secondary Certificate ( XII )",
  //   institution: "Maharashtra State Board",
  //   period: "2014 - 2015",
  //   details: "Graduated with honors, focusing on software development...",
  //   total: 1,
  //   imageURL: mh
  // }, {
  //   degree: "Secondary Certificate ( X )",
  //   institution: "Maharashtra State Board",
  //   period: "2012 - 2013",
  //   details: "Graduated with honors, focusing on software development...",
  //   total: 1,
  //   imageURL: mh
  // }
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
    title: "Standrad Bank : Software Engineering Job Simulation",
    companyName: "Forage",
    companyLogo : forage,
    date: '01/10/2023',
    skill : ['software Development', 'Java', "DSA","GitHub"]
  },{
    title: "Walmart USA : Advanced Software Engineering Job Simulation",
    companyName:  "Forage",
    companyLogo : forage,
    date: '01/09/2023',
    skill : ['software Development', 'Core Java' , 'Node.js' , 'Core Node Js','software Design']
  },{
    title: "Angular and Node js Full MERN stack Developer",
    companyName: 'Udemy',
    companyLogo : udemy,
    date: '',
    skill : ['Node.js' , 'MySQL' , 'MongoDB' , 'AngularJS' ,'Angular', 'Material' , 'Angular CLI' , 'Bootstrap']
  },{
    title: "( CSI ) Certificate Of participation",
    companyName: "Computer Society Of India ( CSI )",
    companyLogo : csi,
    date: '08/10/2021',
    skill : ['Cyber Security']
  }
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


let achievementsData = [{
  achievements : 'Hackon : Research Paper and Project Presentation ',
  year : 'Feb 2022',
  org : 'Vel Tech Technical University ( VISAI 2022 )',
  type : 'edu'
},{
  achievements : 'Certificate Of Appreciation',
  year : 'March 2024',
  org : 'Eazy ERP Solution Pvt Ltd',
  type : 'pro'
},{
  achievements : 'Certificate Of Appreciation',
  year : 'April 2024',
  org : 'Eazy ERP Solution Pvt Ltd',
  type : 'pro'
},{
  achievements : 'Excellence Award for Outstanding Performance ( 2023 - 24 )',
  year : 'April 2024',
  org : 'Eazy ERP Solution Pvt Ltd',
  type : 'pro'
}]

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

let imagesList = [{
  title : 'Title ..',
  url : p3
},{
  title : 'Title ..',
  url : p4
},{
  title : 'Title ..',
  url : p5
},{
  title : 'Title ..',
  url : p17
} ,{
  title : 'Title ..',
  url : p6
},{
  title : 'Title ..',
  url : p7
},{
  title : 'Title ..',
  url : p8
},{
  title : 'Title ..',
  url : p9
},{
  title : 'Title ..',
  url : p10
},{
  title : 'Title ..',
  url : p11
},{
  title : 'Title ..',
  url : p12
},{
  title : 'Title ..',
  url : p13
},{
  title : 'Title ..',
  url : p14
},{
  title : 'Title ..',
  url : p15
},{
  title : 'Title ..',
  url : p16
},{
  title : 'Title ..',
  url : p1
},{
  title : 'Title ..',
  url : p2
}]

export {
  userData,
  experienceData,
  educationData,
  skillsData,
  certificationsData,
  projectsData,
  resumeList,
  achievementsData,
  imagesList
};
