"use client";
import React from "react";
import { icons } from "../../assets/assets";
import "./Projects.css";
import { BsEyeFill } from "react-icons/bs";
import DemoCarousel from "../../components/carousel/Carousel";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?",
    image: [
      "/images/projects/portafolio_01.png",
      "/images/projects/portafolio_02.png",
      "/images/projects/portafolio_03.png",
    ],
    tools: [icons.react, icons.nodejs],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/personal-blog.git",
    previewUrl: "https://personal-blog-mariosalazar.vercel.app",
  },
  {
    id: 2,
    title: "Shopping Boutique S.A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.java, icons.postgresql, icons.primefaces],
    image: [
      "/images/projects/reactfrontend.png",
      "/images/projects/python.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MarioUTN/proyecto_mipymes.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce e-shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    image: [
      "/images/projects/eshop_01.png",
      "/images/projects/eshopcode.png",
      "/images/projects/eshopphone.png",
    ],
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
    image: ["/images/projects/food_01.png", "/images/projects/eshopcode.png"],
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
    image: [
      "/images/projects/nodemongodb.png",
      "/images/projects/eshopcode.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/backend-auth-node.git",
    previewUrl: "https://backend-auth-node.vercel.app",
  },
  {
    id: 5,
    title: "Backend API - Python & MySQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.mysql, icons.flask],
    image: ["/images/projects/pythonmysql.png", "/images/projects/python.png"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/api-mysql-python.git",
    previewUrl: "https://api-mysql-python.vercel.app",
  },
  {
    id: 6,
    title: "Backend API - Python & PostgreSQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.postgresql, icons.flask],
    image: [
      "/images/projects/pythonpostgresql.png",
      "/images/projects/python.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmario10salazarutn/app-postgresql-python.git",
    previewUrl: "https://app-postgresql-python.vercel.app",
  },
  {
    id: 7,
    title: "Backend API - Python & SQL Server",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python, icons.sqlserver, icons.flask],
    image: [
      "/images/projects/pythonsqlserver.png",
      "/images/projects/python.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmario10salazarutn/app-sqlserver-python.git",
    previewUrl: "https://app-sqlserver-python-two.vercel.app",
  },
  {
    id: 8,
    title: "React CRUD Users",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?",
    image: [
      "/images/projects/reactfrontend_02.png",
      "/images/projects/reactfrontend_03.png",
      "/images/projects/reactfrontend_04.png",
      "/images/projects/reactfrontend_05.png",
    ],
    tools: [icons.react, icons.nodejs, icons.postgresql, icons.primefaces],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/react-web-frontend.git",
    previewUrl: "https://react-web-frontend-zeta.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className="project">
      <h3 className="project-title">
        My Projects
        <div className="underline-project">
          <span></span>
        </div>
      </h3>
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
              <DemoCarousel images={project.image} />
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
