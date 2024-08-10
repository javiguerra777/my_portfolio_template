import { NavLink } from 'react-router-dom';
// import PlaceholderImage from '../assets/placeholder_image.png';
// const firstName = 'Sydney';
// const jobTitle = 'Replace with your title';
// const company = 'Replace with your company name';
// const mainDuty = 'Replace with your main duty';
// const jobLocation = 'Replace with your job location';
// const briefJobDescription = 'Replace with a brief description of your job';
// const careerObjective = 'Replace with your career objective';
// const personalLife = 'Replace with a brief description of your personal life';

const About = () => {
    return (
      <main className="home-container">
        <section className="home-hero home-subsection">
          {/* <h2 className="text-4xl mb-2">Hi, I'm Sydney</h2> */}
          <p className="subsection-paragraph">I&apos;m Sydney and I&apos;m a junior full-stack developer looking for new opportunities. I&apos;m particularly interested in UX/UI design and</p>
          <p className="subsection-paragraph">Like to know more?</p>
          <NavLink to="/contact">
          Say hi
          </NavLink>
        </section>
        {/* <section className="overview home-subsection">
          <h3 className="subsection-intro-header">Introduction</h3>
          <h2 className="subsection-big-header">Overview.</h2>
          <p className="subsection-paragraph">{professionalSummary}</p>
          <NavLink to="/about">
          Learn More About Me
          </NavLink>
        </section>
        <section className="projects home-subsection">
          <h3 className="subsection-intro-header">My Works</h3>
          <h2 className="subsection-big-header">Projects.</h2>
          <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
          <NavLink to="/projects">
          View Projects
          </NavLink>
        </section> */}
      </main>
    )
  }
//   return (
//     <main className="about-container">
//        <section className='about-content-container'>
//        {/* <section className='image-container'>
//           {/* Replace this placeholder image and alt tag with a professional head shot */}
//           {/* <img className='headShot' src={PlaceholderImage} alt="placeholder image" />
//         </section> */}
//         <section className='description-container'>
//           <h2 className='text-xl font-medium'>I'm Sydney, a junior full-stack developer.
//             {/* I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation} */}</h2>
//           {/* <p>{briefJobDescription}</p>
//           <p>{careerObjective}</p>
//           <p>{personalLife}</p> */}
//           <p className='mb-4'>If you're interested in my work, reach out to me!</p>
//           <NavLink to="/contact">Say hi</NavLink>
//         </section>
//       </section>
//     </main>
//   )
// }
 export default About;