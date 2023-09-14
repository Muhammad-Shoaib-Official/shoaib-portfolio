import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-top" data-aos="zoom-in" data-aos-duration="1000">
          <p className="small-text about-top-text">
            Get to know me
          </p>
          <h1 className="about-heading heading" >About Me</h1>
        </div>
        <section className="info">
          <div className="image" data-aos="fade-right" data-aos-duration="1000">
            <div className="image-wrapper">
              <Image src="/images/shoaib.png" alt="Shoaib" width={100} height={100} />
            </div>
          </div>
          <div className="info-data" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="sub-heading info-sub-heading">Who am i?</h3>
            <h1 className="info-heading heading">{`I'm Muhammad Shoaib, `}<span className="name">Front-End Web Developer</span> </h1>
            <p className="small-text info-text">I am a freelancer based in the Pakistan and i have been building noteworthy websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
            <hr className="info-text-hr" />
            <div className="address">
              <div className="address-row flex-row">
                <div className="data-col">
                  <div className="info-col">
                    <span className="attribte">Name:</span>
                    <span className="value small-text">Muhammad Shoaib</span>
                  </div>
                  <div className="info-col">
                    <span className="attribte">Phone:</span>
                    <span className="value small-text">+923019783446</span>
                  </div>
                </div>

                <div className="data-col">
                  <div className="info-col">
                    <span className="attribte">Email:</span>
                    <span className="value small-text">ms8168478@gmail.com</span>
                  </div>
                  <div className="info-col">
                    <span className="attribte">Address:</span>
                    <span className="value small-text">House # 21 C block Ali Town, Thokar </span>
                  </div>
                </div>
              </div>
              <div className="address-row">
                <div className="address-row-wrapper flex-row">
                  <div className="">
                    <a href="" className="btn btn-cv">Download CV</a>
                  </div>
                  <hr className="hr space-line" />
                  <div className=" about-social">
                    <Image src="/images/icons/twitter.png" alt="twitter" className="social-icon about-social-icon" width={30} height={30} />
                    <Image src="/images/icons/facebook.png" alt="facebook" className="social-icon about-social-icon" width={30} height={30} />
                    <Image src="/images/icons/linkedin.png" alt="linkedin" className="social-icon about-social-icon" width={30} height={30} />
                    <Image src="/images/icons/github (1).png" alt="github" className="social-icon about-social-icon" width={30} height={30} />
                    <Image src="/images/icons/instagram.png" alt="github" className="social-icon about-social-icon" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About