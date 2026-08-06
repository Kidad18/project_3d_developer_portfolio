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
    title: "Startup Founder",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Enthusiast",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Aruvixa Tech Solution (Founder & CEO)",
    company_name: "Aruvixa",
    icon: starbucks,
    iconBg: "rgb(255, 255, 255)",
    
    points: [
      "Founded and leading Aruvixa Tech Solution, delivering AI-powered and custom software solutions for businesses.",
  "Managing client projects from planning and development to deployment and maintenance.",
  "Leading a development team while collaborating with clients to build scalable digital products.",
  "Driving innovation through full-stack development, cloud technologies, and modern web solutions.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Embsys Technologies",
    icon: tesla,
    iconBg: "rgb(255, 255, 255)",
    
    points: [
      "Developed and trained machine learning models using real-world datasets and AI techniques.",
  "Performed data preprocessing, feature engineering, and model evaluation to improve performance.",
  "Collaborated with mentors to implement AI solutions for practical business problems.",
  "Gained hands-on experience with machine learning workflows, algorithms, and model optimization.",
    ],
  },
  {
    title: "Software Development",
    company_name: "Edify Technologies",
    icon: shopify,
    iconBg: "rgb(255, 255, 255)",
    
    points: [
       "Developed and maintained software applications using modern programming technologies and best practices.",
  "Collaborated with senior developers to implement new features and resolve software issues.",
  "Participated in testing, debugging, and code reviews to improve application quality.",
  "Contributed to real-world software projects while following industry-standard development workflows.",
    ],
  },
  {
    title: "Founder & Owner",
    company_name: "Cravings",
    icon: meta,
    iconBg: "rgb(0, 0, 0)",
    
    points: [
      "Managed the daily operations of a food business, ensuring efficient service and customer satisfaction.",
  "Handled inventory management, supplier coordination, and financial transactions.",
  "Built strong communication, leadership, and problem-solving skills through business management.",
  "Improved business operations by maintaining quality standards and delivering excellent customer experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ganesh consistently exceeds expectations with his technical expertise and commitment to quality.",
    name: "Karthik Kannan",
    designation: "CEO",
    company: "Embsys Technologies",
    image: "https://github.com/Kidad18/Vigil_Safe/blob/main/karthick.jpeg",
  },
  {
    testimonial:
      "A creative developer who approaches every project with professionalism and innovative thinking.",
    name: "Sangeeth",
    designation: "Co-Founder",
    company: "Aruvixa",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Reliable, dedicated, and always focused on delivering meaningful solutions and professionalism.",
    name: "Selvaraj",
    designation: "Founder",
    company: "MIE",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EcoByte",
    description:
      "AI-Powered Microplastic Detection & Degradation System.",
    tags: [
      {
        name: "AI Prediction",
        color: "blue-text-gradient",
      },
      {
        name: "Water Quality Monitoring",
        color: "green-text-gradient",
      },
      {
        name: "Fungal Bioremediation",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kidad18/Eco_Byte",
  },
  {
    name: "Vigil Safe",
    description:
      "AI-Based Women's Safety Platform.",
    tags: [
      {
        name: "SOS Detection",
        color: "blue-text-gradient",
      },
      {
        name: "Voice Recognition",
        color: "green-text-gradient",
      },
      {
        name: "Face Recognition",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Kidad18/Vigil_Safe",
  },
  {
    name: "LifeLink",
    description:
      "AI-Powered Emergency Blood & Organ Donation Platform.",
    tags: [
      {
        name: "AI-assisted donor matching",
        color: "blue-text-gradient",
      },
      {
        name: "Verified donor profiles",
        color: "green-text-gradient",
      },
      {
        name: "Real-time emergency coordination",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Kidad18/Life-Link",
  },
];

export { services, technologies, experiences, testimonials, projects };
