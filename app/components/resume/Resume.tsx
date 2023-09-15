import React from 'react'

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume-wrapper">
        <div className="about-top" data-aos="zoom-in" data-aos-duration="1000">
          <p className="small-text about-top-text ">
            Get to know me
          </p>
          <h1 className="about-heading heading">Education & Experience</h1>
        </div>
        <div className="resume-content flex-row">
          <div className="resume-main-col">
            <div className="resume-col" data-aos="flip-left" data-aos-duration="1000">
              <p className="small-text course-duration">Oct 2019 - Jun 2021</p>
              <div className="sub-heading course-title">MCS - SUPERIOR UNIVERSITY LAHORE</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Relevant Coursework: </span>
                <span className="course-desc small-text">Computer Fundamentals, Web Development, Web Design, Database Management Systems, Object-Oriented Programming, Data Structure, Web Architecture, Mobile Application Development.</span>
              </div>

            </div>
            <div className="resume-col" data-aos="flip-right" data-aos-duration="1000">
              <p className="small-text course-duration">Aug 2017 - Jun 2019</p>
              <div className="sub-heading course-title">BSc - Bahauddin Zakariya University, Multan</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Relevant Coursework: </span>
                <span className="course-desc small-text">Computer Fundamentals, Information Technology, Database Management Systems, visual basic.net.</span>
              </div>

            </div>
            <div className="resume-col" data-aos="flip-up" data-aos-duration="1000">
              <p className="small-text course-duration">Aug 2015 - Mar 2017</p>
              <div className="sub-heading course-title">FSc - Govt P/G Collage, Muzaffargarh</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Coursework: </span>
                <span className="course-desc small-text">Mathematics, Physics, Chemistry</span>
              </div>

            </div>
          </div>
          <div className="resume-main-col">
            <div className="resume-col" data-aos="flip-right" data-aos-duration="1000">
              <p className="small-text course-duration">Mar 2020 - Aug 2020</p>
              <div className="sub-heading course-title">WEB DEVELOPMNENT - JTECH LEARNING</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Relevant Coursework: </span>
                <span className="course-desc small-text">Programming Fundamentals, Web Development, Web Design, Database Management Systems, Object-Oriented Programming, Data Structure, Web Architecture, Mobile Application Development.</span>
              </div>

            </div>
            <div className="resume-col" data-aos="flip-left" data-aos-duration="1000">
              <p className="small-text course-duration">Aug 2019 - Jan 2020</p>
              <div className="sub-heading course-title">Graphic Designer - Synergy Digital Network</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Graphic Designer Internship: </span>
                <span className="course-desc small-text">Created logo designs,banners and thumbnails layouts for clients Youtube Videos.
                </span>
              </div>

            </div>
            <div className="resume-col" data-aos="flip-down" data-aos-duration="1000">
              <p className="small-text course-duration">March 2013 - Mar 2015</p>
              <div className="sub-heading course-title">Matriculation - Govt H/S, Muzaffargarh</div>
              <div className="course-detail">
                <span className=" sub-heading course-work">Coursework: </span>
                <span className="course-desc small-text">Mathematics, Physics, Chemistry</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume