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
  damien,
  Admind_logo_short_RGB,
  LTIMindtree,
  Stratifylogo,
  python,
  kubernetes,
  azure,
 
  
  
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Cloud infrastructure",
    icon: mobile,
  },
  {
    title: "AI & GenAI consultation",
    icon: backend,
  },
  {
    title: "Software Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: javascript,
  },
  {
    name: "TensorFlow",
    icon: reactjs,
  },
  {
    name: "PyTorch",
    icon: python,
  },
  {
    name: "Azure ML",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: typescript,
  },
  {
    name: "React",
    icon: azure,
  },
  {
    name: "Django",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: kubernetes,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer - Team Lead",
    company_name: "Admind Branding & Communication",
    icon: Admind_logo_short_RGB,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Designed, fine-tuned, and deployed Large Language Models (LLMs) for intelligent document understanding, automated creative brief generation, and persona-driven marketing content, leveraging platforms such as Hugging Face Transformers, OpenAI GPT APIs, and LangChain.",
      "Built end-to-end NLP pipelines for extracting actionable insights from unstructured data (surveys, social media, client communications), utilizing named entity recognition (NER), sentiment analysis, and text summarization to drive strategic content decisions and client recommendations.",
      "Developed OCR and document intelligence solutions for automated data extraction, content digitization, and brand asset cataloging from PDFs, scanned images, and diverse file formats using Tesseract, PaddleOCR, and Azure/AWS OCR APIs.",
      "Engineered and deployed advanced computer vision models for brand asset recognition, logo detection, and automated content classification, increasing digital asset reuse, compliance, and brand consistency by 30%+ across campaigns.",
      "Integrated GenAI capabilities for automatic persona creation, creative brief drafting, and AI-powered asset recommendations within internal CMS and CRM tools, accelerating project turnaround and personalization at scale.",
      "Implemented robust ML-powered recommendation systems for smart asset tagging, creative brief generation, and brand guideline enforcement—automating repetitive workflows and improving compliance using vector databases (Pinecone, Weaviate) and semantic search.",
      "Streamlined cross-system data flows using n8n for real-time data ingestion and processing, connecting AI/ML models, content management systems, and internal tools to enable real-time branding insights and reduce manual workload.",
      "Collaborated with creative, data, and marketing teams to translate strategic branding objectives into ML/AI deliverables, ensuring measurable impact and ongoing alignment with evolving business goals."
    ],
  },
  {
    title: "Azure Machine Learning Engineer - SME",
    company_name: "LTIMindtree / Microsoft",
    icon: LTIMindtree,
    iconBg: "#E6DEDD",
    date: "December 2023 - April 2025",
    points: [
      "Configured and managed Azure Machine Learning (AML) networking infrastructure including private endpoints, V-Nets peering, NSG rules, Route Tables and Azure Firewalls for secure communication.",
      "Utilized Azure Auto ML, Prompt-flow, Designer, and Jupyter Notebook for automated model selection and to deploy machine learning models as batch or Online endpoints.",
      "Automated data processing and feature engineering workflows using Azure data factory and azure Data-bricks and pyspark.",
      "Leveraged Azure container Registry, Azure container instance, Azure Kubernetes Service (AKS), Compute instances, and compute clusters to deploy models for real-time inferencing.",
      "Designed and trained deep learning models using Convolutional neural networks for image processing and classification leveraging AML GPU accelerated computes.",
      "Implemented AI solutions using Azure Open-AI Services, including GPT models for NLP to fine-tune pre-trained models for domain specific tasks.",
      "Implemented Retrieval-Augmented Generation(RAG) workflows by integrating Azure Cognitive Search and ChromaDB enabling contextual responses for NLP applications.",
      "Troubleshoot and resolved complex L4 & L7 issues related to Azure Front Door, Azure Load Balancer &Traffic Manager Application Gateway, VPN Gateways, Express-route for high availability architecture."
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Stratify AI",
    icon: Stratifylogo,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "AI consultation and autonomous chatbot development leveraging advanced NLP models like GPT, GenAI, Deeplearning.",
      "Worked with agencies like ADMIND, BOSAR, EYE OPTICS consulting and building GenAI solutions for their businesses.",
      "Configuration of Azure tools for small businesses, Model training and fine tuning, applications development."
    ],
  },
  {
    title: "Networking Support Engineer",
    company_name: "Transcosmos Inc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 2021 - November 2023",
    points: [
      "Installed and Maintained 100+ Windows/Linux/ HyperV/ VMware systems, ensuring a 98% uptime across all devices.",
      "Managed and optimized a network of 50+ servers, routers, switches over WAN/LAN reducing network outages by 40%.",
      "Demonstrated advanced troubleshooting of network fundamentals on L3 and L7 of the OSI model(DNS,DHCP,TCPIP).",
      "Provided support on Azure cloud services such as AKS, VNet, AAD, SQL DB, Blob Storage, VMs, ARM, etc.",
      "Proficient in windows server administration and troubleshooting using tools such as Wireshark, psping, ping, nslookup, dig and network protocols."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "GaoTek Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2019 - September 2023",
    points: [
      "Designed and developed RESTful APIs using Python, Django Rest Framework on Token Based authentication(JWT) and authorization(OAuth) on Machine learning systems.",
      "Built dynamic and responsive user interfaces with React.js/Next.js and managed state with Redux and Developed server-side logic using Node.js and Express.js.",
      "Utilized Git for version control, managed branching strategies, and performed code reviews with Pull requests.",
      "Automated deployment processes with Jenkins, Github actions, Azure Devops and Docker to design robust CI/CD pipelines and workflows.",
      "Designed and optimized database schemas for PostgreSQL, Chromadb, MongoDB for NoSQL storage solutions in Azure.",
      "Managed SDLC using agile methodologies and scrum frameworks, ensuring timely delivery and adaptability."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Great job Germain! Looking forward to seeing what you come up with next.",
    name: "Chris cloude",
    designation: "software engineer",
    company: "Capgemini",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    testimonial:
      "Well done Germain, love it",
    name: "Damien Niyonshuti",
    designation: "software engineer",
    company: "Ford",
    image: damien,
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
    live_link: "https://helnet.onrender.com",
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
    live_link: "https://escape-ja2e.onrender.com" , //https://espace-app.com
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
    live_link: "https://sfrgermain.netlify.app/" // https://my-portfolio.com
  },
];

export { services, technologies, experiences, testimonials, projects };
