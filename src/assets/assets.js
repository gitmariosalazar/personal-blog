import email from './email.png'
import github_white from './github-white.png'
import google from './google.png'
import linkedin from './linkedin.png'
import location from './location.png'
import mario from './mario.gif'
import microsoft from './microsoft.png'
import phone from './phone.png'
import telegram from './telegram.png'
import user_icon from './user_icon.png'
import whatsapp from './whatsapp.png'
import worldwide from './worldwide.png'
import logosenb from './logosenb.png'
import mysql from './softdev/mysql.png'
import nextjs from './softdev/nextjs.png'
import nodejs from './softdev/nodejs.png'
import postgresql from './softdev/postgresql.png'
import python from './softdev/python.png'
import react from './softdev/react.png'
import sqlserver from './softdev/sqlserver.png'
import mongodb from './softdev/mongodb.png'
import prisma from './softdev/prisma.png'
import firebase from './softdev/firebase.png'
import flask from './softdev/flask.png'
import java from './softdev/java.png'
import primefaces from './softdev/primefaces.png'
import globe from './globe.png';
import code from './code.png';
import backend from './backend.gif'
import appdevelopment from './app-development.png';
import webdevelopment from './web-development.png';
import mariosalazar from './mariosalazar.png'
import check from './check.png'
import checknolined from './checknolined.png'
import rubik from './rubik.png'
import language from './language.png'
import viewdocument from './viewdocument.png'
import key from './key.png'
import password from './password.png'
import disable_eye from './disable_eye.png'
import enable_eye from './enable_eye.png'
import information from './information.png'

//menu imports

import menubar from './menubar/menubar.png'
import certificate from './menubar/certificate.png'
import contactme from './menubar/contactme.png'
import cv from './menubar/cv.png'
import education from './menubar/education.png'
import home from './menubar/home.png'
import close from './menubar/close.png'
import projects from './menubar/projects.png'
import skills from './menubar/skills.png'
import profile from './menubar/profile.png'

import fedora from './fedora.png'
import gitlab from './gitlab.png'
import os from './os.png'
import ubuntu from './ubuntu.png'
import window from './window.png'
import versioncs from './versioncs.png'
import educationgif from './education.gif'
import pdfdownload from './pdfdownload.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import tasks from './tasks.png'
import title from './title.png'

export const list_menu = [
    {
        id: 1,
        title: "Home",
        menu: "home",
        to: "/",
        icon: home,
    },
    {
        id: 2,
        title: "Contact me",
        menu: "contact",
        to: "/contact",
        icon: contactme,
    },
    {
        id: 3,
        title: "Curriculum Vitae",
        menu: "curriculum",
        to: "/curriculum",
        icon: cv,
    },
    {
        id: 4,
        title: "Certifications",
        menu: "certifications",
        to: "/certifications",
        icon: certificate,
    },
    {
        id: 5,
        title: "Education",
        menu: "education",
        to: "/education",
        icon: education,
    },
    {
        id: 6,
        title: "About Me",
        menu: "about-me",
        to: "/about-me",
        icon: profile,
    },
    {
        id: 7,
        title: "Projects",
        menu: "projects",
        to: "/projects",
        icon: projects,
    },
    {
        id: 8,
        title: "Skills",
        menu: "skills",
        to: "/skills",
        icon: skills,
    },
    {
        id: 9,
        title: "Tasks",
        menu: "tasks",
        to: "/tasks",
        icon: tasks,
    },
];


export const subpages = [
    {
        id: 1,
        title: "Home",
        menu: "home",
        to: "",
        icon: home,
    },
    {
        id: 2,
        title: "Contact me",
        menu: "contact",
        to: "contact",
        icon: contactme,
    },
    {
        id: 3,
        title: "Curriculum Vitae",
        menu: "curriculum",
        to: "curriculum",
        icon: cv,
    },
    {
        id: 4,
        title: "Certifications",
        menu: "certifications",
        to: "certifications",
        icon: certificate,
    },
    {
        id: 5,
        title: "Education",
        menu: "education",
        to: "education",
        icon: education,
    },
    {
        id: 6,
        title: "About Me",
        menu: "about-me",
        to: "about-me",
        icon: profile,
    },
    {
        id: 7,
        title: "Projects",
        menu: "projects",
        to: "projects",
        icon: projects,
    },
    {
        id: 8,
        title: "Skills",
        menu: "skills",
        to: "skills",
        icon: skills,
    },
];

export const menuicons = {
    menubar, certificate, contactme, cv, education, home, close, projects, skills, profile
}


export const icons = {
    email, github_white, google, linkedin, location, mario, microsoft, phone, telegram, user_icon, whatsapp, worldwide, logosenb, mysql, nextjs, nodejs, postgresql, python, react, sqlserver, mongodb, prisma, firebase, flask, java, primefaces, globe, code, backend, appdevelopment, webdevelopment, mariosalazar, check, checknolined, rubik, language, fedora, gitlab, os, ubuntu, window, versioncs, educationgif, pdfdownload, viewdocument, key, password, disable_eye, enable_eye, twitter, facebook, information, tasks, title
}

export const systems = [
    {
        id: 1,
        name: "Ubuntu",
        image: icons.ubuntu,
    }, {
        id: 2,
        name: "Windows",
        image: icons.window,
    }, {
        id: 3,
        name: "Fedora",
        image: icons.fedora,
    },
]

export const vcs = [
    {
        id: 1,
        name: "Git Hub",
        image: icons.github_white,
    }, {
        id: 2,
        name: "Git Lab",
        image: icons.gitlab,
    },
]

export const skills_data = [
    {
        version: "8.37",
        id_skill: 8,
        urlimage: "https://i.postimg.cc/MG130p7X/mysql.png",
        skill_name: "MySQL",
        description:
            "Sistema de gestión de bases de datos relacional ampliamente utilizado.",
        language_type: {
            urlimage: "https://i.postimg.cc/GpLGfgFd/database.png",
            id_langtype: 1,
            langtype_name: "Language Database",
        },
    },
    {
        version: "16",
        id_skill: 9,
        urlimage: "https://i.postimg.cc/brVmYDhV/postgresql.png",
        skill_name: "PostgreSQL",
        description:
            "Sistema de gestión de bases de datos relacional con énfasis en extensibilidad y cumplimiento de estándares.",
        language_type: {
            urlimage: "https://i.postimg.cc/GpLGfgFd/database.png",
            id_langtype: 1,
            langtype_name: "Language Database",
        },
    },
    {
        version: "7.0.4",
        id_skill: 10,
        urlimage: "https://i.postimg.cc/0yTHJwJL/mongodb.png",
        skill_name: "MongoDB",
        description:
            "Base de datos NoSQL orientada a documentos, escalable y flexible.",
        language_type: {
            urlimage: "https://i.postimg.cc/GpLGfgFd/database.png",
            id_langtype: 1,
            langtype_name: "Language Database",
        },
    },
    {
        version: "3",
        id_skill: 11,
        urlimage: "https://i.postimg.cc/ZqzVqzGm/sqlserver.png",
        skill_name: "SQL Server",
        description:
            "Biblioteca en forma de motor de base de datos SQL ligero y autónomo.",
        language_type: {
            urlimage: "https://i.postimg.cc/GpLGfgFd/database.png",
            id_langtype: 1,
            langtype_name: "Language Database",
        },
    },
    {
        version: "3.12",
        id_skill: 1,
        urlimage: "https://i.postimg.cc/02rtWfYT/python.png",
        skill_name: "Python",
        description: "Lenguaje de programación multipropósito.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },
    {
        version: "ES6",
        id_skill: 2,
        urlimage: "https://i.postimg.cc/6683Q3Dx/javascript.png",
        skill_name: "JavaScript",
        description:
            "Lenguaje de scripting utilizado principalmente en desarrollo web.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },
    {
        version: "17",
        id_skill: 3,
        urlimage: "https://i.postimg.cc/YCGs93j6/java.png",
        skill_name: "Java",
        description:
            "Lenguaje orientado a objetos utilizado ampliamente en aplicaciones empresariales.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },

    {
        version: "18.3.1",
        id_skill: 5,
        urlimage: "https://i.postimg.cc/qMY193Qz/react.png",
        skill_name: "React",
        description:
            "Lenguaje interpretado conocido por su elegancia y simplicidad.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },
    {
        version: "14.2.3",
        id_skill: 6,
        urlimage: "https://i.postimg.cc/d1BWXNSY/nextjs.png",
        skill_name: "Next JS",
        description:
            "Lenguaje interpretado conocido por su elegancia y simplicidad.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },
    {
        version: "V22.4.0",
        id_skill: 7,
        urlimage: "https://i.postimg.cc/MHps80hj/nodejs.png",
        skill_name: "Node JS",
        description:
            "Lenguaje interpretado conocido por su elegancia y simplicidad.",
        language_type: {
            urlimage: "https://i.postimg.cc/Vkcjqk5S/code.png",
            id_langtype: 2,
            langtype_name: "Language programming",
        },
    },
    {
        version: "2021",
        id_skill: 12,
        urlimage: "https://i.postimg.cc/3W5hW3zg/html.png",
        skill_name: "HTML",
        description: "Software de edición de imágenes profesional.",
        language_type: {
            urlimage: "https://i.postimg.cc/t4tF2GVB/palette.png",
            id_langtype: 3,
            langtype_name: "Language Design",
        },
    },
    {
        version: "2021",
        id_skill: 13,
        urlimage: "https://i.postimg.cc/rsB7Vg7s/css.png",
        skill_name: "CSS",
        description: "Software de gráficos vectoriales.",
        language_type: {
            urlimage: "https://i.postimg.cc/t4tF2GVB/palette.png",
            id_langtype: 3,
            langtype_name: "Language Design",
        },
    },
];


export const projects_data = [
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

export const certifications = [
    {
        id: 1,
        title: "Programación Orientada a Objetos",
        subtitle: "POO - UTN",
        year: "2019",
        details: ["Fundamentos de programación GUI", "Clases y Objetos", "Constructores y Modificadores de Acceso", "Herencia y Polimorfismo", "Sobrecarga de Métodos", "Clases Abstractas e Interfaces", "Manejo de Excepciones", "Métodos de Ordenamiento y Búsqueda", "Manejo de Imágenes y librerías graficas"],
    },
    {
        id: 2,
        title: "Congreso Internacional en Ciencias de la Computación",
        subtitle: "Jornadas Académicas Internaciones",
        year: "2018",
        details: ["Universidad Técnica del Norte - CSOFT", "V Jornadas académicas internacionales y I congreso internacional de las Ciencias de la Computación"],
    }, {
        id: 3,
        title: "Jornadas Académicas CISIC - CSOFT",
        subtitle: "Jornadas Académicas UTN",
        year: "2018",
        details: ["Por haber participado en las jornadas académicas CISIC – CSOFT 2018, desarrollado el 25 de enero del 2018 en la Universidad Técnica del Norte"],
    }, {
        id: 4,
        title: "Business Model Canvas Essentials Professional Certification BMCEPC™",
        subtitle: "CertiProf Professional Knowledge /n (BMCEPC) ISSUE DATE FEBRUARY 1, 2023",
        year: "2023",
        details: ["CertiProf is a registered trademark of CertiProf, LLC in the United States and/or other countries, BMCEPC is a trademark of CertiProf, LLC.All rights reserved."],
    }
]

