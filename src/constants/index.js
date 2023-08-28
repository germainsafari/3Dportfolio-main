import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "software engineer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical support Engineer",
    icon: creator,
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
    icon: typescript,
  },
  {
    name: "Python",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: redux,
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
    name: "Postgresql",
    icon: mongodb,
  },
  {
    name: "C#",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "xx",
  //   company_name: "xx",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "xx",
  //   points: [
  //     ,
  //   ],
  // },
  // {
  //   title: "xx",
  //   company_name: "xx",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "xx",
  //   points: [
  //     ,
  //   ],
  // },
  {
    title: "software Engineer Intern",
    company_name: "GaoTek Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Assisted in coding and testing of LabVIEW in Digital Oscilloscopes, leading to the successful development and launch of a new software feature",
      "Contributed to system optimization efforts, resulting in a 20% reduction in Ecommerce server load.",
      "Played a key role in identifying and fixing bugs, thereby improving overall system stability.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "Transcosmos Inc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Present",
    points: [
      "Configuring hardware, software, networks, and printers on Windows/Linux.",
      "Manage IT infra-systems and managed router configuration with CLI and Putty, servers, switches, routers, modems, firewalls, and UPS.",
      "Setting up AD accounts for staff, Group policy management, and working with OU and domain controller.",
      "Conducted regular system maintenance tasks, including backups, system updates, and security checks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Beatiful interface",
    name: "mentor x",
    designation: "mentor",
    company: "Random",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Beatiful interface",
    name: "client x",
    designation: "client",
    company: "Random",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Beatiful interface",
    name: "client x",
    designation: "client",
    company: "Random",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Maisha",
    description:
      "Web-based platform that allows users to collaborate working on differenc projects.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Favorite Movies",
    link: "https://topmovies-2hbr.onrender.com/",
    description:
      "Web application that enables users to add their favorite movies",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SQLAlchemy",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/germainsafari/Top-movies",
  },
  {
    name: "My portfolio",
    description:
      "A 3D portfolio that showcase my exptise.",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
