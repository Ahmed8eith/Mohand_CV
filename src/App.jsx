import { useEffect, useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import myImage from './assets/ana5.JPG';
import './index.css';
import {projects} from './projects.js'
import phone from './assets/icons8-phone-50.png';
import gmail from './assets/icons8-gmail-50.png';
import linkedin from './assets/icons8-linkedin-50.png';
import location from './assets/icons8-location-50.png';
import analysis from './assets/analytics-32.png';
import settings from './assets/gear-32.png';
import storage from './assets/cloud-storage-32.png';
import verification from './assets/icons8-approval-32.png';
import website from './assets/icons8-website-50.png';


import { aboutAnimation, contactsAnimation, skillsAnimation, landingAnimation, projectsAnimation, experienceAnimation, coursesAnimation, servicesAnimation} from './animations.js';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLandingLoaded, setIsLandingLoaded] = useState(false);

  useEffect(()=>{
    landingAnimation()
  },[])

  useEffect(()=>{
    aboutAnimation()
    skillsAnimation()
    projectsAnimation()
    contactsAnimation()
    experienceAnimation()
    coursesAnimation()
    servicesAnimation()
  },[isLandingLoaded])
  

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ['About', 'Experience', 'Courses', 'Skills', 'Services', 'Projects', 'Contact'];

  const handleNavClick = (section) => {
    closeMenu();
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Handle telegram notification and it's cooldown
  useEffect(() => {
    const CD = 10 * 60 * 1000
    const lastNotified = localStorage.getItem("notification")
    const now = Date.now()

    if (lastNotified && now - Number(lastNotified) < CD) return

    localStorage.setItem("notification", now)

    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        language: navigator.language,
        referrer: document.referrer,
        screen: `${screen.width}x${screen.height}`,
      }),
    })
  }, [])

  return (
    <>
     <div className='navbar'>
        <h1 className='name'>Ahmed Mohamed</h1>
        
        <div className='nav-btns'>
          {navItems.map((item) => (
            <button key={item} className='nav-btn' onClick={() => handleNavClick(item)}>
              {item}
            </button>
          ))}
        </div>

        <button className='hamburger-btn' onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {isOpen && (
        <div className='menu-overlay' onClick={closeMenu} />
      )}

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className='close-btn' onClick={closeMenu}>
          <IoCloseOutline size={28} />
        </button>
        <div className='mobile-nav-btns'>
          {navItems.map((item) => (
            <button
              key={item}
              className='mobile-nav-btn'
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className='landing'>
        <img src={myImage} alt="myImg" onLoad={()=>setIsLandingLoaded(true)}/>
        <div className='landing-text'>
          <h4></h4>
          <h2></h2>
          <h3></h3>
          <div className='landing-btns'>
            <a href="https://drive.google.com/file/d/1mHUarMbckoIpliZ8ypZyfQlbAG-HcCmi/view?usp=drive_link">
            <button>My CV</button></a>
            <button onClick={() => handleNavClick('Contact')}>Contact Info</button>
          </div>
        </div>
      </div>
      {isLandingLoaded && (
        <>
          <div className='about' id='about'>
         <div className='about-text'>
            <h1>About Me</h1>
            <h2>
                My journey started in web development, where I focused on building modern, responsive web applications and exploring how real-world websites are structured and delivered. This gave me a strong foundation in creating functional and user-focused digital experiences, along with a practical understanding of how web applications come together.
Alongside that, I developed a growing interest in data engineering, which led me to explore data systems, processing pipelines, and backend architecture. Through self-driven learning and hands-on projects, I built strong foundations in data processing, system design, and problem solving.
I later joined the DEPI internship, where I strengthened my practical experience and transitioned from learning concepts to building real world solutions.
Today, I work across both web development and data engineering, focusing on building reliable, scalable systems and clean user experiences, while maintaining a strong emphasis on simplicity, structure, and long-term maintainability.
            </h2>
         </div>
         <div className='about-boxes'>
          <div className='box'>
            <h3>Education</h3>
            <h4>B.A in languages and translation</h4>
            <h4>Alsun, Ain-shams University</h4>
            <h4>2024-2028</h4>
          </div>
        </div>
      </div>

      <div className='experience' id='experience'>
  <h1>Experience</h1>
  <div className='experience-timeline'>
    <div className='experience-card'>
      <div className='exp-header'>
        <div className='exp-title-group'>
          <h2>Data Engineer Intern</h2>
          <h3>DEPI</h3>
        </div>
        <span className='exp-date'>2025 – 2026</span>
      </div>
      <p className='exp-summary'>
        Applied foundational Data Engineering concepts to real tasks, gaining hands-on
        experience in building and optimizing data workflows.
      </p>
      <ul className='exp-bullets'>
        <li>Learned the fundamentals of Data Engineering, including ETL, pipelines, data modeling, and workflow design</li>
        <li>Developed proficiency in Python for data manipulation and processing</li>
        <li>Applied NumPy for numerical computations and array handling</li>
        <li>Used Pandas for data cleaning, transformation, and basic analysis</li>
      </ul>
      <div className='exp-tags'>
        <span>Python</span>
        <span>ETL</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Data Pipelines</span>
      </div>
    </div>
    <div className='experience-card'>
  <div className='exp-header'>
    <div className='exp-title-group'>
      <h2>Frontend Developer Intern</h2>
      <h3>Ashtar</h3>
    </div>
    <span className='exp-date'>Jun 2025 – Dec 2025</span>
  </div>
  <p className='exp-summary'>
    Gained hands-on experience building responsive and efficient web applications working side to Ashtar's company's Developers,
    bridging theoretical knowledge with real-world development challenges.
  </p>
  <ul className='exp-bullets'>
    <li>Strengthened skills in data structures, algorithms, and problem-solving within a web development context</li>
    <li>Built responsive UIs using JavaScript, HTML, and CSS</li>
    <li>Worked on real-world frontend challenges in a remote environment</li>
  </ul>
  <div className='exp-tags'>
    <span>JavaScript</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>DSA</span>
    <span>Problem Solving</span>
  </div>
</div>
  </div>
</div>




<div className='courses' id='courses'>
  <h1>Courses</h1>

  <div className='courses-grid'>

    <div className='course-card'>
      <div className='course-top'>
        <span className='course-platform'>EDX Platform</span>
        <span className='course-tag'>Data Engineering</span>
      </div>
      <h2>Advanced Python for Data Engineers</h2>
      <ul className='course-bullets'>
        <li>Strengthened Python programming for data engineering tasks</li>
        <li>Performed data cleaning and transformation using Python, NumPy, and Pandas, integrating results with Snowflake</li>
      </ul>
    </div>

    <div className='course-card'>
      <div className='course-top'>
        <span className='course-platform'>Harvard University</span>
        <span className='course-tag'>Computer Science</span>
      </div>
      <h2>CS50</h2>
      <ul className='course-bullets'>
        <li>Learned fundamental concepts of Computer Science, including algorithms, data structures, and problem-solving techniques</li>
        <li>Gained hands-on programming and problem-solving skills</li>
      </ul>
    </div>

  </div>
</div>




      <div className='skills' id='skills'>
        <h5>Explore My</h5>
        <h1>Skills</h1>
        <div className="skills-box">
          <div className='skill'>
            <h3>React</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Javascript</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>CSS</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Html</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Problem Solving</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Tailwind</h3>
            <h5>Intermediate</h5>
          </div>
          <div className='skill'>
            <h3>Node.js</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Express</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Python</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Numpy</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Pandas</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>ETL</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>SQL</h3>
            <h5>Intermediate</h5>
          </div>
          <div className='skill'>
            <h3>Big Data</h3>
            <h5>Basic</h5>
          </div>
        </div>
      </div>


<div className='services' id='services'>
  <h5>What I Offer</h5>
  <h1>Services</h1>
  <p className='services-usp'>
    Clean architecture, reliable data, and code that lasts.
    every solution built with clarity and long-term thinking in mind.
  </p>

  <div className='services-grid'>

<div className='service-card service-card--accent'>
    <div className='service-icon'><img src={website} alt="web" /></div>
      <h2>Web Development</h2>
      <p>Building modern, responsive web applications that focus on usability, performance, and clear structure. Turning ideas into functional digital experiences with attention to detail and user experience.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={settings} alt="gear" /></div>
      <h2>Data Pipeline Development</h2>
      <p>Design and build reliable ETL/ELT pipelines that move, transform, and deliver data efficiently built to scale without breaking.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={storage} alt="storage" /></div>
      <h2>Database Development </h2>
      <p>Structure your data layer with clear modeling and thoughtful schema design, so that your Data structure grows with you instead of against you.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={verification} alt="verifcation" /></div>
      <h2>Data Quality & Validation</h2>
      <p>Implement validation checks and quality gates across your pipelines to catch issues early and keep your data trustworthy.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={analysis} alt="analysis" /></div>
      <h2>Analytics & Reporting Support</h2>
      <p>Transform raw data into structured, query ready formats that make reporting and analysis fast, consistent, and meaningful.</p>
    </div>

  </div>
</div>



      <h1 className='project-header' id='projects'>My Latest Projects</h1>
      <div className='projects'>
        {projects.map((project)=>(
          <div className='project-box'>
            <img src={project.icon} alt="icon" />
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
            <a href={project.link}>
              <button className='visit-btn'>Visit</button>
            </a>
          </div>
        ))}
      </div>

      <div className='contacts' id='contact'>
        <div className='contacts-header'>
          <h5>Get In Touch</h5>
          <h1>Contact Me</h1>
        </div>
        <div className='contacts-wrapper'>
           <div className='contact'>
            <img src={location}alt="location" />
            <h4>Egypt, Cairo</h4>
          </div>
          <div className='contact'>
            <img src={gmail} alt="gmail" />
            <h4>ahmedghaith879@gmail.com</h4>
          </div>
          <div className='contact'>
            <img src={phone} alt='phone' />
            <h4>+201030240751</h4>
          </div>
          <div className='contact'>
            <img className='linkedin-img' src={linkedin} alt='linkedin' />
             <a href="https://www.linkedin.com/in/ahmed-mohamed-885496348/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3WN6NMffSZqMumpriqMykQ%3D%3D">
              <button className='linkedin-btn'>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
      <footer>
            <h5>
              ©{new Date().getFullYear()} Ahmed Mohamed · Icons by{" "}
              <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
                Icons8
              </a>
            </h5>
          </footer>
        </>
      )}
      
    </>
  );
}

export default App;
