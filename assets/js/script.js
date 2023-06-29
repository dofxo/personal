// imports
import skills from "./skills.js";
import projectMaker from "./projects.js";
import socials from "./socials.js";

// projects rendering
const projectsContainer = document.querySelector("#projects");

const projectsList = [
  {
    projectName: "SilverBox (Library)",
    imageUrl: "silverbox.png",
    githubLink: "https://github.com/Silverethical/silverBox",
    projectLink: "https://silverboxjs.ir",
  },
  {
    projectName: "API Call",
    imageUrl: "api.png",
    githubLink: "https://github.com/fulcain/api-practice",
    projectLink: "https://fulcain.github.io/api-practice/",
  },
  {
    projectName: "Car Insurance",
    imageUrl: "insurance.png",
    githubLink: "https://github.com/dofxo/car-insurance",
    projectLink: "https://dofxo.github.io/car-insurance/",
  },
  {
    projectName: "Apollox",
    imageUrl: "apollox.png",
    githubLink: "https://github.com/dofxo/apollox",
    projectLink: "https://dofxo.github.io/apollox",
  },
  {
    projectName: "shirVaKhat",
    imageUrl: "shirvakhat.png",
    githubLink: "https://github.com/dofxo/coin-flip",
    projectLink: "https://dofxo.github.io/apollox",
  },
  {
    projectName: "Monogram",
    imageUrl: "monogram.png",
    githubLink: "https://github.com/dofxo/monogram",
    projectLink: "https://dofxo.github.io/monogram",
  },
  {
    projectName: "Rock Paper Scissors",
    imageUrl: "rps.png",
    githubLink: "https://github.com/dofxo/Rock-papaer-scissors",
    projectLink: "https://dofxo.github.io/Rock-papaer-scissors",
  },
  {
    projectName: "Character Counter",
    imageUrl: "cc.png",
    githubLink: "https://github.com/dofxo/character-counter",
    projectLink: "https://dofxo.github.io/character-counter",
  },
  {
    projectName: "Sticky Note",
    imageUrl: "sticky-note.png",
    githubLink: "https://github.com/dofxo/sticky-notes",
    projectLink: "https://dofxo.github.io/sticky-notes",
  },
  {
    projectName: "IQ Test",
    imageUrl: "iq-test.png",
    githubLink: "https://github.com/dofxo/IQ-test",
    projectLink: "https://dofxo.github.io/IQ-test",
  },
];

projectsList.map((project) => {
  projectsContainer.innerHTML += projectMaker({
    projectName: project.projectName,
    imageUrl: project.imageUrl,
    githubLink: project.githubLink,
    projectLink: project.projectLink,
  });
});

// skills rendering
const skillSection = document.querySelector("#skills");

const skillsList = [
  {
    img: "html.png",
  },
  {
    img: "css.webp",
  },
  {
    img: "sass.png",
  },
  {
    img: "tailwind.png",
  },
  {
    img: "javascript.png",
  },
  //   {
  //     img: "react.png",
  //   },
];

skillsList.map((skill) => {
  skillSection.innerHTML += skills({
    img: skill.img,
  });
});

// social media
const socialMediaSection = document.querySelector("#social-media");

const socialsList = [
  {
    icon: "bx bxl-github",
    href: "https://github.com/dofxo/",
  },
  {
    icon: "bx bxl-instagram",
    href: "https://www.instagram.com/_mhmd_kargar/",
  },
  ,
  {
    icon: "bx bxl-telegram",
    href: "https://telegram.me/dofxo",
  },
  {
    icon: "bx bxl-yahoo",
    href: "https://mohammadkargar01@yahoo.com/",
  },

  {
    icon: "bx bxl-whatsapp",
    href: "https://wa.me/989170177385",
  },
];

socialsList.map((social) => {
  socialMediaSection.innerHTML += socials({
    icon: social.icon,
    href: social.href,
  });
});
