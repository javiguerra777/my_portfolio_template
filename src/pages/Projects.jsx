import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'HTML Project: Food Preferences',
    description: 'A project to use HTML to create a webpage form to select food preferences',
    repositoryLink: 'https://github.com/Solemai/HTML-Project-Food-Preferences.git',
  },
  {
    title: 'CSS Project: Welcome to the Enchanted Boutique',
    description: 'A project to showcase CSS stylings on a store webpage',
    repositoryLink: 'https://github.com/Solemai/CSS-Project-Enchanted-Boutique.git',
  },
  {
    title: 'JavaScript Mini-Project: Magic 8 Ball',
    description: 'A JavaScript file to showcase a "Magic 8 Ball" to generate a random response whenever the code is ran',
    repositoryLink: 'https://github.com/Solemai/JSMiniProject-Magic8Ball.git',
  },
  {
    title: 'JavaScript Mini-Project: Store App - Bejeweled Teas',
    description: 'A JavaScript file for a store front that allows the user to output bought items',
    repositoryLink: 'https://github.com/Solemai/JSMiniProject-StoreApp.git',
  },
  {
    title: 'DangoDot: Anime Streaming Site',
    description: 'Capstone Project for an Anime streaming site to showcase HTML/CSS/JS and other technologies in React',
    repositoryLink: 'https://github.com/Solemai/DangoDot.git',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects