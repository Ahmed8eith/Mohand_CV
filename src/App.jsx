import { useEffect, useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import myImage from './assets/ana5.JPG';
import './index.css';
import {projects} from './projects.js'
import phone from './assets/icons8-phone-50.png';
import gmail from './assets/icons8-gmail-50.png';
import behance from './assets/icons8-behance-50 (1).png';
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
        <h1 className='name'>Mohand Hany</h1>
        
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
            <a href="https://drive.google.com/file/d/1LAgrQ7gcqponcux6XBSX2j3AuTRRYmxs/view?usp=drive_link">
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
                About Me
                My journey in graphic design began through freelance work, where I developed visual solutions for clients across a wide range of industries.
                Working on branding, logo design, social media content, and marketing materials helped me build a strong foundation in visual communication,
                creativity, and understanding how effective design supports business goals. As I gained experience, I transitioned into agency environments,
                collaborating with creative and marketing teams to deliver consistent, client-focused designs while maintaining brand identity across multiple projects.
                This experience strengthened my ability to work in fast-paced environments, meet deadlines, and adapt to diverse creative requirements.
                Today, I continue to create impactful visual content as a Graphic Designer, specializing in branding, social media, and marketing design.
                My focus is on producing clean,
                engaging, and meaningful designs that not only capture attention but also communicate ideas effectively and help brands build a lasting visual identity.
            </h2>
         </div>
         <div className='about-boxes'>
          <div className='box'>
            <h3>Education</h3>
            <h4>Tourism and Hotels</h4>
            <h4>Pharaohs Higher Institute of Tourism and Hotels</h4>
            <h4>Major: Department of Tourism studies</h4>
          </div>
        </div>
      </div>

      <div className='experience' id='experience'>
  <h1>Experience</h1>
  <div className='experience-timeline'>
    <div className='experience-card'>
      <div className='exp-header'>
        <div className='exp-title-group'>
          <h2>Graphic Designer | Rwaq, Saudi Arabia</h2>
          <h3>Rwaq</h3>
        </div>
        <span className='exp-date'>Jul 2025 – Present</span>
      </div>
      <p className='exp-summary'>
        Create engaging visual content and marketing materials that align with brand identity and business goals.
      </p>
      <ul className='exp-bullets'>
        <li>Design social media posts, advertisements, and promotional materials</li>
        <li>Collaborate with the marketing team to deliver creative campaigns</li>
        <li>Produce high-quality designs while meeting project deadlines</li>
      </ul>
      <div className='exp-tags'>
        <span>Adobe Photoshop</span>
        <span>Adobe Illustrator</span>
        <span>Adobe Premiere Pro</span>
        <span>CapCut</span>
      </div>
    </div>
    <div className='experience-card'>
  <div className='exp-header'>
    <div className='exp-title-group'>
      <h2>Graphic Designer | Hala World Marketing Agency</h2>
      <h3>Hala World</h3>
    </div>
    <span className='exp-date'>Mar 2025 – Jul 2025</span>
  </div>
  <p className='exp-summary'>
    Contributed to branding and digital marketing projects for a variety of clients.
  </p>
  <ul className='exp-bullets'>
    <li>Designed social media content and marketing assets</li>
    <li>Worked closely with the creative team to deliver client-focused designs</li>
    <li>Maintained brand consistency across multiple projects</li>
  </ul>
  <div className='exp-tags'>
    <span>Adobe Photoshop</span>
      <span>Adobe Illustrator</span>
      <span>Adobe Premiere Pro</span>
      <span>CapCut</span>
  </div>
</div>
<div className='experience-card'>
      <div className='exp-header'>
        <div className='exp-title-group'>
          <h2>Freelance Graphic Designer</h2>
          <h3>Personal</h3>
        </div>
        <span className='exp-date'>Feb 2021 – Present</span>
      </div>
      <p className='exp-summary'>
        Worked with a diverse range of clients, delivering creative design solutions across multiple industries.      </p>
      <ul className='exp-bullets'>
        <li>Designed logos, branding materials, social media content, and promotional graphics</li>
        <li>Managed projects from concept to final delivery</li>
        <li>Built long-term client relationships through consistent, high-quality work</li>
      </ul>
      <div className='exp-tags'>
        <span>Adobe Photoshop</span>
        <span>Adobe Illustrator</span>
        <span>Adobe Premiere Pro</span>
        <span>CapCut</span>
      </div>
    </div>
  </div>
</div>


      <div className='skills' id='skills'>
        <h5>Explore My</h5>
        <h1>Skills</h1>
        <div className="skills-box">
          <div className='skill'>
            <h3>Adobe Photoshop</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Adobe Illustrator</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Adobe Premiere</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>CapCut</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Logo Design</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Print Design</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Typography</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Color Theory</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Creative Thinking</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>Attention to Detail</h3>
            <h5>Experienced</h5>
          </div>
        </div>
      </div>


<div className='services' id='services'>
  <h5>What I Offer</h5>
  <h1>Services</h1>
  <p className='services-usp'>
    Creative visuals, strong branding, and designs that leave a lasting impression.
    Every project is crafted with purpose, clarity, and attention to detail.
  </p>

  <div className='services-grid'>

<div className='service-card'>
    <div className='service-icon'><img src={website} alt="web" /></div>
      <h2>Brand Identity Design</h2>
      <p>Create memorable logos and cohesive visual identities that help businesses establish a strong and recognizable brand presence.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={settings} alt="gear" /></div>
      <h2>Social Media Design</h2>
      <p>Design engaging social media posts, advertisements, and promotional content that capture attention and support marketing goals.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={storage} alt="storage" /></div>
      <h2>Marketing & Promotional Materials </h2>
      <p>Develop flyers, banners, posters, brochures, and other marketing assets that communicate messages clearly and professionally.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={verification} alt="verifcation" /></div>
      <h2>Logo Design</h2>
      <p>Design clean, versatile, and memorable logos that reflect a brand's personality and remain effective across digital and print media.</p>
    </div>

    <div className='service-card'>
      <div className='service-icon'><img src={analysis} alt="analysis" /></div>
      <h2>Photo Editing & Retouching</h2>
      <p>Enhance, retouch, and optimize images for marketing, social media, and digital platforms while maintaining a natural, high-quality finish.</p>
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
            <h4>kaimohand2019@gmail.com</h4>
          </div>
          <div className='contact'>
            <img src={phone} alt='phone' />
            <h4>+201013138725</h4>
          </div>
          <div className='contact'>
            <img className='linkedin-img' src={behance} alt='linkedin' />
             <a href="https://www.behance.net/mohand-hany">
              <button className='linkedin-btn'>Behance</button>
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
