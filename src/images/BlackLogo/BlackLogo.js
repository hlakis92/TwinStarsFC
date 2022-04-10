import React from 'react';
import BlackLogo from './BlackLogo.png'; // Tell webpack this JS file uses this image

console.log(BlackLogo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={BlackLogo} alt="BlackLogo" />;
}

export default Header;