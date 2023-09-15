import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="services-wrapper">
        <div className="about-top" data-aos="zoom-in"
          data-aos-duration="1000">
          <p className="small-text about-top-text ">
            Get to know me
          </p>
          <h1 className="about-heading heading">Portfolio</h1>
        </div>
        <div className="service-content portfolio-content">
          <div className="service-row flex-row">
            <div className="service-col portfolio-col" data-aos="zoom-out-right" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/blooger.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">Blooger DESIGN</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/Blogger-Website" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-col portfolio-col" data-aos="zoom-out-up" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/real-esate-header.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">Real Estate DESIGN</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/real-estate-image-slider" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-col portfolio-col" data-aos="zoom-out-left" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/my-project.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">My Project DESIGN</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/my-work-react-js" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-col portfolio-col" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/My Blog.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">My Blog DESIGN</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/My-Blogs" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-col portfolio-col" data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/Educaional.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">Educational DESIGN</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/Educational-Website" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-col portfolio-col"
              data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="portfolio-img">
                <Image src="/images/portfolio-img/Ecommrse.PNG" alt="Service logo" width={380} height={180} />
                <div className="porfolio-overlay">
                  <h2 className="sub-heading service-heading portfolio-title">Ecommrse Design</h2>
                  <div className="portfolio-btn">
                    <a href="https://github.com/Muhammad-Shoaib-Official/ECommres-Website" target="_blank" className="btn btn-portfolio-link">Explore More<span className="arrow">
                    </span> &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio