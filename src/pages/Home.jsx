import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/darkforestbackground.jpg'

const fullName = 'Elizabeth Robinson';
const personalQuote = '““If you don’t take risks, you can’t create a future.”—Monkey D. Luffy, One Piece”';
const professionalSummary = 'A data-driven professional with full-stack development and UX design tendencies';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="Dark Forest" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph2">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph2">While in the NPower Path2Tech program, I worked on a series of coding projects to display my skills in HTML, CSS, and JavaScript and experience acquired during my time in the program. Each project linked will include a short description and a link to the GitHub repository where the code is stored. Please free to take a look by clicking on the link below to View Projects. Thank you! </p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home