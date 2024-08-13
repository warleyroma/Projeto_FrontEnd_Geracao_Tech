import React from 'react';
import  ImgLogo from '../assets/logoheader.svg';


const Logo = ( {className}) => {
  return (
    <div className="logo" >
       <img src={ImgLogo} alt="Logomarca" width="253" height="44" />
    </div>
  );
};

export default Logo;