import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/ElizabethRobinsonPic.jpg';

// Replace these variables with your information
const firstName = 'Elizabeth';
const jobTitle = 'Senior Business Analyst';
const company = 'an international security company based in Sweden';
const mainDuty = 'where I manage the customer data and financials for the Global Accounts portfolio';
const jobLocation = 'New York Metro Area.';
const briefJobDescription = 'Manage a Global Account portfolio generating over 45% of the business revenue, optimizing Invoice-to-Cash processes and client credit risk monitoring to enhance AR collections strategies and financial reporting. Built automated data distribution processes and real-time dashboards, reducing DSO by 20%, and lead training for new global directors, managers, and new department hires.';
const careerObjective = 'Accomplished data professional with over five years of experience in customer data management, analytics, and business operations. Adept at driving data-informed decision-making and supporting business growth by designing and maintaining analytic and financial reporting dashboards to track customer performance and revenue. Proficient in leveraging advanced analytics tools and methodologies to support data democratization, reporting optimization, and business process enhancement. Strong communicator bridging the gap between business needs and technical implementations and providing comprehensive training and support to internal and external users. Upon graduating from the NPower Path2Tech program, I am seeking to transition into a career in tech where I can mesh my Data Analytics experience with Full-Stack Development and UX Design.';
const personalLife = 'Outside of work. I love the outdoors and appreciating nature as well as binge watching anime and traveling the globe with my husband';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="Photo of Elizabeth" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;