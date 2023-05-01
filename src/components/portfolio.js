import React from "react";
import Project from "./project";

const projects = [
  {
    id: 0,
    title: "CheersCheck",
    languages: "html, css, js, MySQL",
    packages:
      "bcrypt, Express.js, connect-session-sequelize, dotenv, express-handlebars, express-session, jshint, masonry-layout, mysql2, nodemon and sequelize",
    image: "/images/cheers-check.png",
    description:
      "A web application where alcohol enthusiasts can keep track of what's in their liquor cabinet. Users can make comments on other user's inventory as well. Using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.",
    repo: "https://github.com/louiskgkim/CheersCheckCopy",
  },
  {
    id: 1,
    title: "Professional-README-Generator",
    languages: "js",
    packages:
      "node.js, inquirer",
    image: "/images/generated-readme.png",
    description:
      "Based on specific questions answered by the user, a complete professional README file will be created based on those answers.",
    repo: "https://github.com/louiskgkim/Professional-README-Generator",
  },
  {
    id: 2,
    title: "Employee Tracker",
    languages: "js",
    packages:
      "node.js, inquirer, mysql2",
    image: "/images/employee-tracker.png",
    description:
      "Created an interface so that it is easy for non-developers to easily view and interact with information within a database. These interfaces are called content management systems (CMS). My assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    repo: "https://github.com/louiskgkim/Employee-Tracker",
  },
  {
    id: 3,
    title: "Fitness Planner",
    languages: "html, css, js",
    image: "/images//fitness-planner.png",
    packages: "none",
    description:
      "A web application that helps users decide what workouts to do based on the weather on a searched city.",
    repo: "https://github.com/louiskgkim/Fitness-Planner",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/images/weather-dashboard.png",
    description:
      "This weather dashboard will show today's current weather data and the next five days weather forecast of the searched city.",
    repo: "https://github.com/louiskgkim/Weather-Dashboard",
  },
  {
    id: 5,
    title: "LuxBox",
    languages: "html, css, js",
    packages: "express, apollo-server-express, graphql, mongoose",
    image: "/images/Luxbox.png",
    description:
      "A centralized platform for luxury goods where the shopping experience for frequent luxury good purchasers and attract more customers to the platform.",
    repo: "https://github.com/louiskgkim/luxbox-mern-app-copy",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
