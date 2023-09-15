import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-wrapper">
        <div className="service-top"
          data-aos="fade-right"
          data-aos-duration="1000">
          <p className="small-text service-top-text">
            what my client think about me
          </p>
          <h1 className="service-top-heading sub-heading">Testimonials</h1>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="service-col testimonial-col" data-aos="zoom-in" data-aos-duration="1000" >
                <div className="service-logo testimonial-img">
                  <Image src="" alt="user" width={100} height={100} />
                  <h2 className="sub-heading service-heading testimonial-user-name">DESIN-TRENDS</h2>
                </div>

                <p className="small-text service-desc testimonial-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam, quam porro voluptatem dolores quasi? Est vitae nemo veniam laborum. Numquam sunt ducimus commodi, ea soluta sint architecto, asperiores iure, cum nesciunt aperiam quo corrupti.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-col testimonial-col" data-aos="zoom-in" data-aos-duration="1000" >
                <div className="service-logo testimonial-img">
                  <Image src="" alt="user" width={100} height={100} />
                  <h2 className="sub-heading service-heading testimonial-user-name">DESIN-TRENDS</h2>
                </div>

                <p className="small-text service-desc testimonial-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam, quam porro voluptatem dolores quasi? Est vitae nemo veniam laborum. Numquam sunt ducimus commodi, ea soluta sint architecto, asperiores iure, cum nesciunt aperiam quo corrupti.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-col testimonial-col" data-aos="zoom-in" data-aos-duration="1000" >
                <div className="service-logo testimonial-img">
                  <Image src="" alt="user" width={100} height={100} />
                  <h2 className="sub-heading service-heading testimonial-user-name">DESIN-TRENDS</h2>
                </div>

                <p className="small-text service-desc testimonial-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam, quam porro voluptatem dolores quasi? Est vitae nemo veniam laborum. Numquam sunt ducimus commodi, ea soluta sint architecto, asperiores iure, cum nesciunt aperiam quo corrupti.
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial