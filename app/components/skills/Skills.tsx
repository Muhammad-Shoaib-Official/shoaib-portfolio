import React from 'react'

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-wrapper">
        <div className="skills-top" data-aos="fade-right" data-aos-duration="1000">
          <p className="small-text service-top-text">
            My level of knowledge in some tools
          </p>
          <h1 className="service-top-heading sub-heading">My Skills</h1>
        </div>
        <div className="skill-row">
          <div className="skill-row-wrapper">
            <div className="skill-main-col">
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data" data-aos="fade-up"
                  data-aos-anchor-placement="top-center" data-aos-duration="1000">
                  <span className="small-text">HTML/CSS</span>
                  <span className="small-text">70%</span>
                </span>
                <div className="skill-bar"></div>
              </div>
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data">
                  <span className="small-text">WEB Design</span>
                  <span className="small-text">65%</span>
                </span>
                <div className="skill-bar skill-bar-2"></div>
              </div>
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data">
                  <span className="small-text">WEB Development</span>
                  <span className="small-text">75%</span>
                </span>
                <div className="skill-bar skill-bar-3"></div>
              </div>

            </div>
            <div className="skill-main-col">
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data">
                  <span className="small-text">JavaScript</span>
                  <span className="small-text">50%</span>
                </span>
                <div className="skill-bar skill-bar-4"></div>
              </div>
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data">
                  <span className="small-text">React JS</span>
                  <span className="small-text">30%</span>
                </span>
                <div className="skill-bar skill-bar-5"></div>
              </div>
              <div className="skill-col" data-aos="fade-up"
                data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <span className="skill-data">
                  <span className="small-text">Photoshop</span>
                  <span className="small-text">80%</span>
                </span>
                <div className="skill-bar skill-bar-6"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills