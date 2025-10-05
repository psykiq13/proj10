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
      title: "Game Developer",
      icon: web,
    },
    {
      title: "Blender Developer",
      icon: mobile,
    },
    {
      title: "Film Editor",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Marketing Intern - CC",
      company_name: "Alum-n-i",
      icon: starbucks,
      iconBg: "#ffffffff",
      date: "August 2024 - October 2024",
      points: [
        "Developed various creative ideas to market the company.",
        "Created and edited Instagram reels for promotion.",
        "Attended group meetings to discuss further trends.",
      ],
    },
    {
      title: "Marketing Intern - Video Editing",
      company_name: "Amaav",
      icon: tesla,
      iconBg: "#ffffffff",
      date: "October 2024 - Feb 2025",
      points: [
        "Came up with ideas to launch the brand.",
        "Created posts for promotions and brand item reveals.",
        "Edited long form videos and interviews. ",
      ],
    },
    {
      title: "Content and UI Developer",
      company_name: "Paloma Care",
      icon: shopify,
      iconBg: "#5ae6f8ff",
      date: "April 2025 - May 2025",
      points: [
        "Created a website for the company.",
        "Wrote, edited and published blogs regarding Women Health.",
        "Developed a Mobile App UI from scratch for the company.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ryan proved me wrong.",
      name: "Neeza Shaji",
      designation: "CFO",
      company: "Zenco3421",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ryan does.",
      name: "Piyush Gehlot",
      designation: "COO",
      company: "TheWay",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Ryan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Victor John",
      designation: "CTO",
      company: "Smoky Co.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Obstacle Game",
      description:
        "This is an Obstacle game created in unity by me. Give it a try!",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "vscode",
          color: "green-text-gradient",
        },
        {
          name: "blenderstudio",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/psykiq13/Obstacle-Course.git",
    },
    {
      name: "Interactive Table",
      description:
        "This is an interactive table made with the help of blender and verge3d.",
      tags: [
        {
          name: "verge3d",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
        {
          name: "blenderstudio",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/psykiq13/Interactive-Table.git",
    },
    {
      name: "AR Blender Character",
      description:
        "This is an AR Character made with the help of Blender and Verge3d",
      tags: [
        {
          name: "blender",
          color: "blue-text-gradient",
        },
        {
          name: "verge3d",
          color: "green-text-gradient",
        },
        {
          name: "blenderstudio",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/psykiq13/blenderar.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };