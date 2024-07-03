"use client";
import React from "react";
import { icons } from "../../assets/assets";
import "./Projects.css";
import { BsEyeFill } from "react-icons/bs";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?",
    image: "/images/projects/1.png",
    tools: [icons.react, icons.nodejs],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Shopping Boutique S.A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.java, icons.postgresql, icons.primefaces],
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce e-shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    image: "/images/projects/3.png",
    tools: [
      icons.react,
      icons.nodejs,
      icons.nextjs,
      icons.mongodb,
      icons.prisma,
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/e-shop",
    previewUrl: "https://e-shop-mariosalazar.vercel.app",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    image: "/images/projects/4.png",
    tools: [icons.react, icons.nodejs, icons.nextjs, icons.mongodb],
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Backend API - NodeJS & MongoDB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.nodejs, icons.mongodb],
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Backend API - Python & MySQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.mysql, icons.flask],
    image: "/images/projects/pythonmysql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Backend API - Python & PostgreSQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.postgresql, icons.flask],
    image: "/images/projects/pythonpostgresql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Backend API - Python & SQL Server",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.sqlserver, icons.flask],
    image: "/images/projects/pythonsqlserver.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <div className="project">
      <h2 className="project-title">My Projects</h2>
      <div className="project-box-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-box">
            <h3>
              {project.title}
              <div className="underline-project">
                <span></span>
              </div>
            </h3>
            <div className="project-image">
              <img src={project.image} alt="" />
            </div>
            <div className="project-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                commodi? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Minus, commodi?
              </p>
              <div className="floating-icons">
                <a
                  href={project.gitUrl}
                  className="floating-link"
                  title="View Code"
                  target="_blank"
                >
                  <img src={icons.code} alt="" className="icon-floating" />
                </a>
                <a
                  href={project.previewUrl}
                  className="floating-link"
                  title="Live Preview"
                  target="_blank"
                >
                  <img src={icons.globe} alt="" className="icon-floating" />
                </a>
              </div>
            </div>
            <div className="box-footer-project">
              <h4>Tools used</h4>
              <div className="project-icons">
                {project.tools.map((tool, index) => (
                  <img key={index} src={tool} alt="" className="project-icon" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
