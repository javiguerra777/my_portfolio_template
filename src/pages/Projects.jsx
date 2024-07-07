import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    repositoryLink: 'Link to the GitHub repository',
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