import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Replace with your first name';
const jobTitle = 'Replace with your title';
const company = 'Replace with your company name';
const mainDuty = 'Replace with your main duty';
const jobLocation = 'Replace with your job location';
const briefJobDescription = 'Replace with a brief description of your job';
const careerObjective = 'Replace with your career objective';
const personalLife = 'Replace with a brief description of your personal life';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
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