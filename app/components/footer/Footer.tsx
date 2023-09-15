import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="fooer-social">
            <a href="http://https://twitter.com/shoaib137107" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/twitter.png" alt="twitter" className="social-icon  footer-social-icon" width={30} height={30} /></a>
            <a href="https://www.facebook.com/profile.php?id=100011341570500" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/facebook.png" alt="facebook" className="social-icon footer-social-icon" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shoaib-2a63181bb/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/linkedin.png" alt="linkedin" className="social-icon footer-social-icon" width={30} height={30} />
            </a>
            <a href="https://github.com/Muhammad-Shoaib-Official?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/github (1).png" alt="github" className="social-icon footer-social-icon" width={30} height={30} />
            </a>
            <a href="http://https://www.instagram.com/mohammadshoaib1410/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/instagram.png" alt="github" className="social-icon footer-social-icon" width={30} height={30} />
            </a>
          </div>
          <ul>
            <div className="footer-menu">
              <li><a href="#" className=" footer-nav-icon">Home</a></li>
              <li><a href="#about" className=" footer-nav-icon">About</a></li>
              <li><a href="#resume" className=" footer-nav-icon">Resume</a></li>
              <li><a href="#portfolio" className=" footer-nav-icon">Portfolio</a></li>
              <li><a href="#contact" className=" footer-nav-icon">Contact</a></li>
            </div>
          </ul>
        </div>
        <div className="copyright">
          <hr className="hr" />
          <p className="small-text">Design & Developed by <i><strong>Muhammad Shoaib</strong></i> &copy;2021<span className="vertical-hr"></span>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer