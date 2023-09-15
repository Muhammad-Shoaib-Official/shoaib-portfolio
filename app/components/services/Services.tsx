import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className="services">
      <div className="services-wrapper">
        <div className="service-top" data-aos="fade-right"
          data-aos-duration="1000">
          <p className="small-text service-top-text">
            Services i offer to my clients
          </p>
          <h1 className="service-top-heading sub-heading">My Services</h1>
        </div>
        <div className="service-content">
          <div className="service-row flex-row">
            <div className="service-col" data-aos="flip-left"
              data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/psd-file.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">PSD DESIGN</h2>
              <p className="small-text service-desc">
                We put convenience of use in the center and make sure your web solution has intuitive navigation that makes for fast & easy onboarding.Combining the latest design trends with your brand book.
              </p>
            </div>
            <div className="service-col" data-aos="flip-right" data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/web-design.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">WEB DESIGN</h2>
              <p className="small-text service-desc">
                A website is your digital home. It should not just catch the eye of your visitors, its role is to attract and keep them, as well as communicate your brand message and raise awareness about your products or service.
              </p>
            </div>
            <div className="service-col" data-aos="flip-right"
              data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/web-development.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">WEB DEVELOPMENT</h2>
              <p className="small-text service-desc">
                Put your business online and get more sales & leads with the quality and professional web development services. I have experience in all facets of web development to help our clients reach their full digital potential.
              </p>
            </div>
            <div className="service-col" data-aos="flip-left" data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/responsive-design.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">FULLY RESPONSIVE</h2>
              <p className="small-text service-desc">
                RWD is an approach that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction.
              </p>
            </div>
            <div className="service-col" data-aos="flip-up"
              data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/trending.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">GROWTH AND EVOLUTION</h2>
              <p className="small-text service-desc">
                We continuously advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs.
              </p>
            </div>
            <div className="service-col" data-aos="flip-up"
              data-aos-duration="1000">
              <div className="service-logo">
                <Image src="/images/icons/customer.png" alt="Service logo" width={100} height={100} />
              </div>
              <h2 className="sub-heading service-heading">CUSTOMER SUPPORT</h2>
              <p className="small-text service-desc">
                We help you provide high availability and trouble-free functionality of both the client end and the content management system of your website, web portal, or another kind of web experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services