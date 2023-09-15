import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <section className="header">
      <div className="header-bg">
        <video autoPlay loop>
          <source src="./images/header-background.mp4" />
        </video>
      </div>
      <div className="header-wrapper">
        <div className="header-content"  >
          <h1 className="header-title" data-aos="zoom-in-up" data-aos-duration="1000">{`Hello, I'm `}<span className="name"></span></h1>
          <p className="header-text" data-aos="zoom-in-up" data-aos-duration="1000">
            Put your business online and get more sales & leads with the quality and <br />professional web development services.
          </p>
          <a href="#portfolio" className="btn header-btn" data-aos="zoom-in-up" data-aos-duration="1000">View my Work <span className="arrow">
          </span> &#8594;</a>
        </div>

        <div className="social" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="social-wrapper">
            <a href="http://https://twitter.com/shoaib137107" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/twitter.png" alt="twitter" className="social-icon" width={30} height={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011341570500" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/facebook.png" alt="facebook" className="social-icon" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shoaib-2a63181bb/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/linkedin.png" alt="linkedin" className="social-icon" width={30} height={30} />
            </a>
            <a href="https://github.com/Muhammad-Shoaib-Official?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/github (1).png" alt="github" className="social-icon" width={30} height={30} />
            </a>
            <a href="http://https://www.instagram.com/mohammadshoaib1410/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/icons/instagram.png" alt="github" className="social-icon" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header