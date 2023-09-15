import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-top" data-aos="zoom-in"
          data-aos-duration="1000">
          <p className="small-text contact-top-text">
            Feel free to contact me anytimes
          </p>
          <h1 className="about-heading heading">Get in Touch</h1>
        </div>
        <div className="contact-row flex-row">
          <div className="message-me" data-aos="zoom-out-right"
            data-aos-duration="1000">
            <form action="" className="contact-form">
              <h2 className="form-heading sub-heading">Message Me</h2>
              <div className="form-inputs">
                <div className="form-row">
                  <input type="text" className="message-input" placeholder="Name" />
                  <input type="text" className="message-input" placeholder="Email" />
                </div>
                <div className="form-row">
                  <input type="text" className="message-input subject-input" placeholder="Subject" />
                </div>
                <div className="form-row">
                  <textarea name="" id="" cols={24} rows={8} placeholder="Message" className="messge-content"></textarea>
                </div>
              </div>

              <a href="" className="btn">Send Message</a>
            </form>
          </div>
          <div className="contact-info" data-aos="zoom-out-left"
            data-aos-duration="1000">
            <h2 className="form-heading sub-heading">Contact Info</h2>
            <p className="small-text contact-info-text">Always available for freelance work if the right project<br />comes along, feel free to contact me!</p>
            <div className="contact-info-wrapper">
              <div className="address-row flex-row">
                <div className="data-col">
                  <div className="col-wrap">
                    <div className="info-col contact-info-col">
                      <div className="attribte">Name:</div>
                      <div className="value small-text">Muhammad Shoaib</div>
                    </div>
                    <div className="info-col contact-info-col">
                      <div className="attribte">Phone:</div>
                      <div className="value small-text">+923019783446</div>
                    </div>
                  </div>
                  <div className="col-wrap">
                    <div className="info-col contact-info-col">
                      <div className="attribte">Email:</div>
                      <div className="value small-text">ms8168478@gmail.com</div>
                    </div>
                    <div className="info-col contact-info-col">
                      <div className="attribte">Address:</div>
                      <div className="value small-text">House # 21 C block Ali Town, Thokar</div>
                    </div>
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

export default Contact