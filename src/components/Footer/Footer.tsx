import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-bg py-7.5 lg:px-162 md:px-112 px-32 flex justify-center md:justify-start">
      <ul className="text-mainText flex flex-col md:flex-row gap-3.5 w-max md:text-start text-center">
        <li>© 2023</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Email</li>
        <li>RSS feed</li>
        <li>Add to Feedly</li>
      </ul>
    </footer>
  );
};

export default Footer;
