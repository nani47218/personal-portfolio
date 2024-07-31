import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 bg-black fixed bottom-0 md:left-20 dark:bg-dark-mode">
      <p className="text-xs text-center text-light-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Prem kumar
        </a>{" "}
  
        
      </p>
    </footer>
  );
}
export default Footer;
