import {
  ai_eng,
  consultant,
  mern,
  chatbot,
  web,
  javascript,
  pythonp,
  flaskp,
  djangop,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  technokart,
  moons,
  unilogoms,
  unimu,
  todoapp,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Python Developer",
    icon: web,
  },
  {
    title: "Chat Bot Developer",
    icon: chatbot,
  },
  {
    title: "React Native Developer",
    icon: reactjs,
  },
  {
    title: "AI Engineer",
    icon: ai_eng,
  },
  {
    title: "MERN Developer",
    icon: mern,
  },
  {
    title: "Consultant",
    icon: consultant,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: pythonp,
  },
  {
    name: "Flask",
    icon: flaskp,
  },
  {
    name: "Django",
    icon: djangop,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Redux",
    icon: redux,
  }
];

const experiences = [
  {
    title: "Associate Software Developer to Team Lead",
    company_name: "TECHNOKART CONSULTANCY SERVICES LLP",
    icon: technokart,
    iconBg: "#383E56",
    date: "November 2018 - August 2019",
    points: [
      "Built a chatbot on Google Assistant using Google’s Dialogflow and Firebase Functions.",
      "An Alexa skill was made for the client using Node.js.",
      "Developed a service of Auto Email Categorization for the client company using the IBM Watson NLP and NLC service.",
      "Managed a team of developers and interns alongside conducted meetings with clients showcasing my communication skills.",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "63 MOONS TECHNOLOGIES LTD",
    icon: moons,
    iconBg: "#E6DEDD",
    date: "September 2019 – February 2021",
    points: [
      "Created a Flask API for calculating the Value at Risk of a client’s portfolio.",
      "Computation takes place in the backend in Flask and a JSON response is sent to back to the frontend which is in Angular.",
      "Genetic Algorithm code for predicting the Zero Coupon Yield Rates(ZCYC) for market data and research on the same subject."
    ],
  },
  {
    title: "Software Consultant",
    company_name: "63 MOONS TECHNOLOGIES LTD",
    icon: moons,
    iconBg: "#E6DEDD",
    date: "August 2021 - October 2021",
    points: [
      "Advance reporting tool using Python Django web framework was developed to create various types of reports as per the user’s requirement.",
      "Functionalities of pivot table in pandas are used in the same.",
      "The application is connected to MSqlserver database and can be configured tosuit whichever database based on ORM principles.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "TECHNOKART CONSULTANCY SERVICES LLP",
    icon: technokart,
    iconBg: "#383E56",
    date: "February 2022 - July 2022",
    points: [
      "Created a Web Portal in Django with Machine Learning Applications.",
      "Integration of any database based on Django’s ORM functionality was done.",
      "Frontend was initially developed in native html, JavaScript and CSS and later transferred and converted using React Js components.",
      "Created a Salesforce Application for client in React Js.",
    ],
  },
  {
    title: "NCS Demonstrator / Full Stack Developer",
    company_name: "University of Aberdeen - Aberdeen Software Factory (Part Time)",
    icon: unilogoms,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Created a Django Application for a client to automate forms.",
      "Integration of any database based on Django’s ORM functionality and an API was created using serializers.",
      "Frontend was created using Bootstrap.",
      "The application took input from Gravity forms from the clients website.",
    ],
  }
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const degrees = [
  {
    date: "JANUARY, 2023 - MAY, 2024",
    logo: unilogoms,
    type: "Masters In Artificial Intelligence",
    school: "The School of Natural and Computing Science",
    uni: "University Of Aberdeen",
    description: "Course content overview: Subjects include NLG, Coding in Python, PDDL and Prolog, Data Mining and Machine Learning. Project: Building Domain Language using Natural Language Descriptions.",
  },  
  {
    date: "JULY, 2014 - MAY, 2018",
    logo: unimu,
    type: "Bachelor of Engineering in Electronics and Telecommunication.",
    school: "Don Bosco Institute of Technology",
    uni: "University of Mumbai",
    description: "Course content overview: Subjects learnt included Artificial Neural Networks, Image Processing and Speech Processing. Final Year Project: Cryptography Using Artificial Neural Networks.",
  },
];

const certificates = [
  {
    title: "Building RESTful APIs with Flask",
    image: cert1,
  },
  {
    title: "Building RESTful APIs with Django",
    image: cert2,
  },
  {
    title:"Building a Personal Portfolio with Django",
    image: cert3,
  },
  {
    title:"Deploying Django Apps: Make Your Site Go Live",
    image: cert4,
  },
  {
    title:"Django: Forms",
    image: cert5,
  },
  {
    title:"Flask Essential Training",
    image: cert6,
  },
  {
    title:"Full Stack Web Development with Flask",
    image: cert7,
  },
  {
    title:"Learning Django (2018)",
    image: cert8,
  },
  {
    title:"Test-Driven Development in Django",
    image: cert9,
  },
];


const projects = [
  {
    name: "To-Do Application In Node JS.",
    description:
      "A simple TO-DO application made using Nodejs, Express, EJS and MongoDB",
    tags: [
      {
        name: "Nodejs",
        color: "blue",
      },
      {
        name: "mongodb",
        color: "green",
      },
      {
        name: "express",
        color: "pink",
      },
      {
        name: "bootstrap",
        color: "yellow",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/TyrelM10/node_simple_todo_application",
    video: "1QUL5e8f283HfWfnR9rJdgDjPaQc-VFvn",
  },
  {
    name: "Simple Portfolio in Django.",
    description:
      "Portfolio Website in Django using Bootstrap and Material UI in frontend.",
    tags: [
      {
        name: "django",
        color: "cyan",
      },
      {
        name: "bootstrap",
        color: "yellow",
      },
      {
        name: "css",
        color: "pink",
      },
      {
        name: "python",
        color: "green",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/TyrelM10/node_simple_todo_application",
    video: "1QUL5e8f283HfWfnR9rJdgDjPaQc-VFvn",
  },
];

const uuid = "1DhkObS-TX8ndJrI7M_jwjtCSGmsBsev-";

export { services, technologies, experiences, projects, degrees, certificates, uuid };
