import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/placeholder_hero_background.jpg'

const fullName = 'Replace with your name';
const personalQuote = 'Replace with your personal quote';
const professionalSummary = 'Replace with your professional summary';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl">Hi, I am {fullName}</h2>
        <p className="text-lg">{personalQuote}</p>
        <NavLink to="/contact">Contact Me</NavLink>
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3>Introduction</h3>
        <h2>Overview.</h2>
        <p>{professionalSummary}</p>
        <NavLink to="/about">Learn More About Me</NavLink>
      </section>
      <section className="home-subsection">
        <h3>My Work</h3>
        <h2>Projects.</h2>
        <p>I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">View Projects</NavLink>
      </section>
    </main>
  )
}

export default Home