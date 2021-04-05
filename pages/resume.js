import Head from 'next/head'
import {
  Container,
  Navbar, 
  Nav } 
from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCertificate, faCheck, faGem } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJava, faJs, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/resume.module.css'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Wes Dembinski Resume</title>
        <meta name="description" content="Resume for Wes Dembinski"></meta>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700&display=swap" rel="stylesheet" media='screen' />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i&display=swap" rel="stylesheet" media='screen' />
      </Head>
      <Navbar fixed='top' bg="dark" variant="dark" expand="lg" className={`${styles.sideNav} ${styles.bgPrimary}`}>
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <span className="d-block d-lg-none">Wes Dembinski</span>
          <span className='d-none d-lg-block'>
            <img src="profile.jpg" className={`img-fluid ${styles.profileImg} rounded-circle mx-auto mb-2`} alt="profile image"/>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navbarCollapse}`}>
          <Nav className={`${styles.navItems} ${styles.navbarNav}`}>
            <Nav.Link href="#home" className={`${styles.navLink}`}>About</Nav.Link>
            <Nav.Link href="#experience" className={styles.navLink}>Experience</Nav.Link>
            <Nav.Link href="#education" className={styles.navLink}>Education</Nav.Link>
            <Nav.Link href="#skills" className={styles.navLink}>Skills</Nav.Link>
            <Nav.Link href="#interests" className={styles.navLink}>Interests</Nav.Link>
            <Nav.Link href="#awards" className={styles.navLink}>Awards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid className="p-0">

        <section className={`p-3 p-lg-5 d-flex align-items-center ${styles.resumeSection}`} id="home">
          <div className="w-100">
            <h1 className="mb-0">
              <span>Wes</span>
              <span className={styles.textPrimary}>Dembinski</span>
            </h1>
            <div className={`${styles.subheading} mb-5`}>
              <span className={styles.phone}>(515) 681-7008 </span>
              <span className='p-1 d-none d-sm-inline'>&bull;</span>
              <span className='d-block d-sm-inline-block'>
                <a href="mailto:wesley.dembinski@gmail.com">wesley.dembinski@gmail.com</a>
              </span>
            </div>
            <p className={`${styles.lead} mb-5`}>
              Driven leader with over 12 years of experience in software development, I’m
              currently solving some of the healthcare industry’s most difficult problems in
              EMR’s. I’m responsible for building highly reliable and scalable products to be used
              at the point of care. Passionate about growing teams and enabling them for success,
              while operationalizing and increasing efficiencies.
            </p>
            <ul className={`list-inline`}>
              <li key={'linked-in'} className="list-inline-item">
                <a href="https://www.linkedin.com/in/wes-dembinski-a0755219b/">
                  <FontAwesomeIcon icon={faLinkedin} className={`${styles.socialIcons} pr-2`} />
                </a>
              </li>
              <li key={'git'} className="list-inline-item">
                <a href="https://github.com/wdembins">
                  <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcons} pr-2`} />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section className={`${styles.resumeSection} p-3 p-lg-5 d-flex justify-content-center`} id="experience">
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className={`${styles.resumeItem} d-flex flex-column flex-md-row justify-content-between mb-5`}>
              <div className="resume-content">
                <h3 className="mb-0">Director, Software Engineering</h3>
                <div className={`${styles.subheading} mb-3`}>Cerner</div>
                <ul>
                  <li>Building highly complex products with sensitive data, serving millions of users across the globe</li>
                  <li>Responsible for over $7 million of R&D across multiple products</li>
                  <li>Instrumental in designing a cross platform system to create a unified approach in patient centric care planning</li>
                  <li>Effectively lead managers and technical leaders within the organization, to build high performing teams</li>
                  <li>Collaborate with Product Management and UX, ensuring we're building the right products and features to meet our clients' needs</li>
                  <li>Facilitated an inclusive culture, ensuring everyone had opportunities to do their best work</li>
                  <li>Influential to partner company's roadmap to help ensure the success of clients</li>
                </ul>
              </div>
              <div className={`${styles.resumeDate} text-md-right`}>
                <span className={styles.textPrimary}>August 2019 - Present</span>
              </div>
            </div>

            <div className={`${styles.resumeItem} d-flex flex-column flex-md-row justify-content-between mb-5`}>
              <div className="resume-content">
                <h3 className="mb-0">Senior Engineering Manager</h3>
                <div className={`${styles.subheading} mb-3`}>Cerner</div>
                <ul>
                  <li>Led multiple product development teams, driving roadmap in conjunction with product management</li>
                  <li>Highly technical and active contributor to teams React/Rails web application</li>
                  <li>Balanced competing priorities, ensuring defects and technical were part of planning new features</li>
                  <li>Built internal RoR web application to enable team to scale content development, migrating from a legacy excel process</li>
                  <li>Bridging the communication gap between product and development</li>
                </ul>
              </div>
              <div className={`${styles.resumeDate} text-md-right`}>
                <span className={styles.textPrimary}>August 2015 - August 2019</span>
              </div>
            </div>

            <div className={`${styles.resumeItem} d-flex flex-column flex-md-row justify-content-between mb-5`}>
              <div className="resume-content">
                <h3 className="mb-0">Engineering Manager</h3>
                <div className={`${styles.subheading} mb-3`}>Cerner</div>
                <ul>
                  <li>Managed small team, while still contributing features to the product</li>
                  <li>Built products to help clients migrate billingcoding system in one of the largest regulation changes for EMRs in the US </li>
                  <li>Experience working directly with clients to resolve issues to their satisfaction</li>
                  <li>Track record of teams delivering on time, with high quality</li>
                  <li>Collaborated with 3rd party, to ensure successful API integration</li>
                </ul>
              </div>
              <div className={`${styles.resumeDate} text-md-right`}>
                <span className={styles.textPrimary}>August 2012 - August 2015</span>
              </div>
            </div>

            <div className={`${styles.resumeItem} d-flex flex-column flex-md-row justify-content-between mb-5`}>
              <div className="resume-content">
                <h3 className="mb-0">Software Engineer</h3>
                <div className={`${styles.subheading} mb-3`}>Cerner</div>
                <ul>
                  <li>Participate in all phases of software development lifecycle including requirements analysis, design, test, implementation, maintenance and support</li>
                  <li>Full stack development of various modules in a large C++ code base</li>
                  <li>Directly supported clients to resolve bugs</li>
                  <li>Built new features for Women’s Health product, including auto calculating estimated delivery dates, helping to streamline workflows</li>
                  <li>Led performance and load testing for teams products</li>
                  <li>Excellent organizational, communication and coordination skills</li>
                  <li>Managing releases and branches of the software</li>
                </ul>
              </div>
              <div className={`${styles.resumeDate} text-md-right`}>
                <span className={styles.textPrimary}>January 2009 - August 2012</span>
              </div>
            </div>

          </div>

        </section>

        <hr className="m-0" />

        <section className={`${styles.resumeSection} p-3 p-lg-5 d-flex align-items-center`} id="education">
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className={`${styles.resumeItem} d-flex flex-column flex-md-row justify-content-between mb-5`}>
              <div className="resume-content">
                <h3 className="mb-0">University of Iowa</h3>
                <div className={`${styles.subheading} mb-3`}>Bachelor of Science</div>
                <div>Computer Engineering</div>
                <div>Minor in Business Administration</div>
                <p>GPA: 3.7</p>
              </div>
              <div className={`${styles.resumeDate} text-md-right`}>
                <span className={styles.textPrimary}>August 2004 - December 2008</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section className={`${styles.resumeSection} p-3 p-lg-5 d-flex align-items-center`} id="skills">
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className={`${styles.subheading} mb-3`}>Programming Languages &amp; Tools</div>
            <ul className='list-inline'>
              {[faGem, faJs, faHtml5, faCss3Alt, faReact, faBootstrap, faJava].map((icon, index) => {
                return (
                  <li key={index} className="list-inline-item">
                    <FontAwesomeIcon icon={icon} className={`${styles.devIcon} pr-2`} />
                  </li>
                );
              })}
            </ul>

            <div className={`${styles.subheading} mb-3`}>Workflow</div>
            <ul className="list-unstyled">
              <li className='m-2'>
                <FontAwesomeIcon icon={faCheck} className={styles.workflowItemIcon} />
                <span className='ml-2'>Highly Collaborative on cross functional team</span>
              </li>
              <li className='m-2'>
                <FontAwesomeIcon icon={faCheck} className={styles.workflowItemIcon} />
                <span className='ml-2'>Mobile-First, Responsive Design</span>
              </li>
              <li className='m-2'>
                <FontAwesomeIcon icon={faCheck} className={styles.workflowItemIcon} />
                <span className='ml-2'>Agile Development Process</span>
              </li>
              <li className='m-2'>
                <FontAwesomeIcon icon={faCheck} className={styles.workflowItemIcon} />
                <span className='ml-2'>Mentoring Team Members</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section className={`${styles.resumeSection} p-3 p-lg-5 d-flex align-items-center`} id="interests">
          <div className="w-100">
            <h2 className="mb-5">Interests</h2>
            <p>Golf was one of my first passions.  I continue to be an enthusiast, both as a student and helping others.  
              I also enjoy outdoor activities with my family and spend part of my free time coaching my kids' youth sports.
            </p>
          </div>
        </section>

        <hr className="m-0" />

        <section className={`${styles.resumeSection} p-3 p-lg-5 d-flex align-items-center`} id="awards">
          <div className="w-100">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <div className="d-flex flex-row pb-1">
              <span className={styles.awardIconContainer}>
                <FontAwesomeIcon icon={faAward} className={`${styles.awardIcon} pr-2`} />
              </span>
              <span className='d-block'>Cerner’s Master Award - Given to top 1% of performers (annually) who contribute exceptional business results</span>
            </div>
            <div className="d-flex flex-row pb-1">
              <span className={styles.awardIconContainer}>
                <FontAwesomeIcon icon={faAward} className={`${styles.awardIcon} pr-2`} />
              </span>
              <span>Top 15% annual review rating for 8 consecutive years</span>
            </div>
            <div className="d-flex flex-row pb-1">
              <span className={styles.awardIconContainer}>
                <FontAwesomeIcon icon={faCertificate} className={`${styles.awardIcon} pr-2`} />
              </span>
              <span>Scrum Alliance CSM Certified</span>
            </div>
          </div>
        </section>

    </Container>
    </>
  )
}
