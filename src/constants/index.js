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
    title: "Machine learning",
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
    name: "threejs",
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
      "Great job Germain! Looking forward to seeing what you come up with next.",
    name: "Chris cloude",
    designation: "software engineer",
    company: "Capgemini",
    image: "https://media.licdn.com/dms/image/D4D03AQHskFLYFlXWZw/profile-displayphoto-shrink_800_800/0/1687092007500?e=1699488000&v=beta&t=C3dx4MA9RfrXsaBdbVA-NF836UwDxV8HUziZBkBCp9w",
  },
  {
    testimonial:
      "Well done Germain, love it",
    name: "Damien Niyonshuti",
    designation: "software engineer",
    company: "Ford",
    image: "damien",
  },
  {
    testimonial:
      "I've had the opportunity to use Escape CRM in my business and I must say I'm genuinely impressed.",
    name: "SAFARI Evariste",
    designation: "CEO",
    company: "IMPANO Maize Flour",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Helnet",
    description:
      "Web-based platform that allows users to collaborate working on different projects.",
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
    source_code_link: "https://github.com/germainsafari/Helnet",
    live_link: "https://helnet.onrender.com/",
  },
  {
    name: "Espace",
    link: "",
    description:
      "A customer relationship management software that connect leads and agents",
    tags: [
      {
        name: "Advanced Django",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/germainsafari/Espace",
    live_link: "https://espace.onrender.com" , //https://espace-app.com
  },
  {
    name: "My portfolio",
    description:
      "A 3D portfolio that showcase my expertise.",
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
    source_code_link: "https://github.com/germainsafari/3Dportfolio-main",
    live_link: "" // https://my-portfolio.com
  },
];

export { services, technologies, experiences, testimonials, projects };
