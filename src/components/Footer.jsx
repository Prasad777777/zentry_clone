import {  FaLinkedin, FaGithub, FaResearchgate } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/prasad-parjane-034646252/",
    icon: <span className="text-2xl font-bold"><FaLinkedin /></span>,
  },
  {
    href: "https://github.com/Prasad777777",
    icon: <span className="text-2xl font-bold"><FaGithub /></span>,
  },
  {
    href: "https://www.researchgate.net/profile/Prasad-Parjane-2",
    icon: <span className="text-2xl font-bold"><FaResearchgate /></span>,
  },
];


const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-large font-bold md:text-left hover:underline text-black transition-colors duration-500 ease-in-out hover:text-white">
          ©Prasad_Parjane 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-bold hover:underline md:text-right text-black transition-colors duration-500 ease-in-out hover:text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
