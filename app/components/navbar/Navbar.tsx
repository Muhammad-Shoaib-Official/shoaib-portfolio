"use client";
import Image from 'next/image'
import React from 'react';

const Navbar = () => {
  function showMenu() {
    // sideMenu.style.right='0px';
  }
  function hideMenu() {
    // sideMenu.style.right='-250px';
  }
  return (
    <nav className="nav-bar">
      <div className="nav-wrapper flex-row">
        <div className="logo">
          <a href=" " className="logo-content">
            <Image src="/images/icons/ms logo.png" alt="" width={80} height={80} />
          </a>
        </div>
        <div className="menu-icon" onClick={showMenu}>
          <Image src="/images/icons/menu.png" alt="" width={30} height={30} />
        </div>
        <ul className="nav-menu" id="sideMenu">
          <div className="menu-close" onClick={hideMenu}>
            <Image src="/images/icons/right-arrow.png" alt="" width={30} height={30} />
          </div>
          <div className="nav-item-wrapper">
            <li className="nav-item"><a href="#" className="nav-link" >Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link" >About</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link" >Resume</a></li>
            <li className="nav-item"><a href="#portfolio" className="nav-link" >Portfolio</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" >Contact</a></li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar