# Portfolio Template
[Description](#description) | [Prerequisites](#prerequisites) | [Demo](#demo) | [Important Git/Github Expectations](#important-gitgithub-expectations) | [Getting Started](#getting-started) | [Next Steps](#next-steps) | [Contributors](#contributors) | [Deployment](#deployment) | [Live Application](#live-application)
## Description
This is a template portfolio that was built with React. You can use this project to help you build out your porfolio. This project provides the foundation for a portfolio and has minimal styling in place. There are currently four routes in this project: a `home page`, `projects page`, `contact page`, and `about me page`. The technologies used on this project include:

- Vite
- React
- React Router Dom
- React Hook Form
- React Icons
- Framer Motion
- SASS (Syntactically awesome style sheets), this builds upon CSS for styling
- Tailwind CSS

## Prerequisites
- Have a basic understanding of git and github
- Have node and npm installed on your computer
- Basic understanding of HTML, CSS, and JS
- Basic understanding of how React and React Router works
- Understand how to use CSS to build responsive web pages

## Demo
Below is a demo of what the project will look like when you first run the project. This is a thumbnail so you will need to click on it to view the video in Vimeo.

[![Watch the video](readme_files/Portfolio_Demo_Thumbnail.png)](https://vimeo.com/980251710)

## Important Git/GitHub Expectations:
- The original GitHub repository is not allowed to have edits from anyone who is not a contributor. All the contributors will be listed in the [Contributors](#contributors) section of the README
- Pushing to main on the original GitHub repository is not allowed
- Creating a new branch or Pull Request on the original GitHub repository is not allowed
- If you want to use this repository you must first FORK the repository, do not clone or pull from the original GitHub URL.
- Here is a link to the original GitHub repository [Repository Link](https://github.com/javiguerra777/my_portfolio_template)

## Getting Started
1. **Checking for node and npm**
- Make sure you have node and npm installed on your computer, to check if you have node and npm installed on your machine open a new terminal and run these command:
```shell
node --version
npm --version
```
- If you get a version number, example: `10.2.4`, then that means you have npm and node installed. If you get an error, then you will have to download node and npm, to do so go to [Node's Website](https://nodejs.org/en) to download node and npm on your machine.

2. **Forking Repository**
- FORK the repository, to fork a repository on GitHub there is a button located in the top right corner of every GitHub repository and it says "Fork", then click on "Create a new fork". Below is an image that will help guide you:

![Git Fork Example](/readme_files/Git_Fork_Example.png  )
3. **Cloning Repository to your computer**
- After forking the repository you will need to use the terminal to clone or pull the repository. To find the URL to clone or pull there is a green button that says "code" if you click on it a drop down will give you the URL so you can copy that URL, below is an example image to guide you:

![Git Clone Example](/readme_files/Git_Clone_Example.png)

- Then use the terminal, run this command::
```shell
git clone https://github.com/<github_username>/<github_repo_name>.git
```
4. **Opening Project**
- Once you have this project on your computer open it in a code editor of choice (Visual Studio Code recommended)
5. **Installing project dependencies**
- After you have the project open in your code editor, use the terminal, run this command (make sure you are in the correct working directory): 
```shell
npm install
``` 
6. **Running project**
- All that is left to do is run the project, this can be accomplished opening a terminal and running this command:
```shell
npm run dev
```

## Next Steps
To begin converting this template into your own portfolio here are some recommended steps to help you get started:

- Convert the hero image on the landing page to your own custom hero image, located in `src/pages/Home.jsx`
- Upload your current resume to this project and link it so that users can download and view your resume, located in `src/components/DownloadResume.jsx`
- Add your own projects, so they can be rendered in the projects page, located in `src/pages/Projects.jsx`
- Adjust the contact form so that users can send you an ameil if they want to contact you, located in `src/pages/Contact.jsx`
- Convert the placeholder image in the about me page to your own professional headshot, located in `src/pages/About.jsx`

This project uses SASS and Tailwind to style this project, SASS is very similar to CSS the only big difference is you can import other SASS files, you can create reusable variables for styling, and you can nest styles in SASS. Tailwind is just a CSS library for styling below are some articles for you to read to better improve your understanding of SASS and Tailwind:

- Link for: [SASS for Beginners](https://www.freecodecamp.org/news/the-beginners-guide-to-sass/)
- Link for: [Tailwind for Beginners](https://www.freecodecamp.org/news/learn-tailwind-css/)

To begin styling this project look under `src/styles` there are a few SASS files you can begin working in and editing to adjust your styling. You are free to adjust the styles to your liking.

There are a lot more steps to accomplish to fully turn this template into your own portfolio, but these were a few steps to help you get started.

## Contributors
- @javiguerra777
- @srirachy
- @kurogisa

## Deployment
Use netlify to deploy your application, follow the steps below to deploy this project to Netlify:

1. **Build Your Application**
- Use the terminal, run this command:
```shell
npm run build
```
2. **Install Netlify CLI**
- Use the terminal, run this command:
```shell
npm install netlify-cli -g
```
3. **Login to Netlify**
- Use the terminal and login to netlify:
```shell
netlify login
```
If you do not have a netlify account, you will have to create a Netlify Account, to create a Netlify account go to: [Netlify's Website](https://www.netlify.com/) to create a new account, then try logging in with the terminal

4. **Initialize Your Site with Netlify**
```shell
netlify init
```
During the setup process, you will encounter several prompts:
- When prompted `What would you like to do?`, choose `Create & configure a new site`
- For the team selection, opt for your preferred team (e.g., `Personal`), (remember this is dependent on the team name you created when signing up for a Netlify account)
- Assign a name to your site when asked. For instance, `<replace with your name>-portfolio-website`
- Upon being asked for a build command, the default suggestion will be `npm run build`. You can either process with this by pressing enter or explicitly type `npm run build` before hitting enter
- Finally, for deployment directory, `dist` will be suggested. You can confirm this choice by pressing enter or input `dist` yourself and then press enter.

After completing these steps your application will be deploying on Netlify. So everytime you make a new push to your GitHub repository it will automatically deploy the site for you.

## Live Application
If you are interested in seeing how this application looks in a production level setting check out the link below:
[Deployed Application](https://my-portfolio-template.netlify.app/)