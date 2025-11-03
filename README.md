# Pet Adoption Site

A Full-Stack web application leveraging MongoDB, Express, Node.js that allows users to sign up, log in, and post pets available for adoption. Each pet includes a name, bio, and adoption status. Users can react to posts with thumbs up/down and adopt pets, which updates the adoption status dynamically. The site integrates with the Dog CEO API to fetch images for each pet profile.

## [Live Demo](https://pet-adoption-site-jnv5.onrender.com/)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Acknowledgements](#acknowledgements)

## Project Overview

Pet Adoption Site is a full-stack CRUD application built using Node.js, Express, MongoDB, and Passport.js.
Users can create accounts, post pets for adoption, and interact with pet listings in real time.
Each listing dynamically fetches a random dog image via the Dog CEO API, giving each post a unique personality.

This project demonstrates user authentication, session management, RESTful API integration, and frontend interactivity through JavaScript and EJS templating.

## Features

- User Authentication functionality allowing users to sign up, log in, and maintain sessions via Passport.js
- Add Pets by creating pet profiles with name, bio, and adoption status
- “Adopt Me” button updates pet status dynamically
- Thumbs Up/Down Reactions
- RESTful API structure with clean server routes
- Secure data persistence with MongoDB.
- Secure Node.js/Express setup
- RESTful API routes for all CRUD operations.
- Styled with Bootstrap and Font Awesome

## Technologies Used

<a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" title="Linux" width="36" height="36" /></a>   <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /></a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" /></a>   <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" title="HTML5" width="36" height="36" /></a>   <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" title="CSS3" width="36" height="36" /></a>    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /></a>     <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=express" alt="ExpressJS" title="ExpressJS" width="36" height="36" /></a>  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" title="MongoDB" width="36" height="36" /></a><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /></a>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pet-adoption-site.git
````

2. Navigate to the project directory:

```bash
cd pet-adoption-site
```

3. Install Dependencies:
```bash
npm install
```
4. Start the server:
```bash
npm run dev
```
5. Open your browser and go to:
```bash
http://localhost:8080
```

## Usage

1. Log in or create an account.
2. Add a new pet by entering: pet name, bio, and adoption status
3. Browse pets posted by you and other users
4. Use the 👍 and 👎 icons to react to posts.
5. Click “Adopt Me” to update pet’s adoption status dynamically
6. Log out to end your session

## Screenshots
[Live Demo](https://pet-adoption-site-jnv5.onrender.com/)

<img width="604" height="658" alt="Screenshot 2025-11-03 130846" src="https://github.com/user-attachments/assets/d3af5f9a-af4c-4913-8659-bf803db01d8c" />

## Acknowledgements
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Documentation](https://expressjs.com/)
* [MongoDB Documentation](https://www.mongodb.com/docs/)
* [Passport.js](https://www.passportjs.org/docs/)
* [MDN](https://developer.mozilla.org/en-US/)
* [Bootstrap](https://getbootstrap.com/)

