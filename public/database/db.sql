create table project(
	id_project integer auto_increment,
    title varchar(100) not null,
    description varchar(200) not null,
    giturl varchar(60) not null,
    previewurl varchar(100),
    constraint pk_idproject primary key(id_project)
);

create table images(
	id_image integer auto_increment,
    urlimage varchar(200) not null,
    project integer not null,
    constraint pk_idimages primary key(id_image),
    constraint fk_project_images foreign key(project) references project(id_project)
);

create table tools(
	id_tools integer auto_increment,
    tool_name varchar(60) not null,
    constraint pk_idtools primary key(id_tools)
);

create table toolprojects(
	id_toolproject integer auto_increment,
    project integer not null,
    tool integer not null,
    constraint pk_idtoolproject primary key(id_toolproject),
    constraint fk_project_tp foreign key(project) references project(id_project),
    constraint fk_tool_tp foreign key(tool) references tools(id_tools)
);


create table skills(
	id_skill integer auto_increment,
    skill_name varchar(60) not null unique,
    version varchar(60) not null,
    language_type integer not null,
    description varchar(150),
    constraint pk_idskill primary key(id_skill),
    constraint fk_lt_skill foreign key(language_type) references language_type(id_langtype)
);


update language_type set urlimage = 'https://i.postimg.cc/GpLGfgFd/database.png' where id_langtype = 1;
update language_type set urlimage = 'https://i.postimg.cc/Vkcjqk5S/code.png' where id_langtype = 2;
update language_type set urlimage = 'https://i.postimg.cc/t4tF2GVB/palette.png' where id_langtype = 3;


select*from language_type;

-- Inserts para lenguajes de programación
INSERT INTO skills (skill_name, version, language_type, description, urlimage)
VALUES ('Python', '3.12', 2, 'Lenguaje de programación multipropósito.','https://i.postimg.cc/02rtWfYT/python.png'),
       ('JavaScript', 'ES6', 2, 'Lenguaje de scripting utilizado principalmente en desarrollo web.','https://i.postimg.cc/6683Q3Dx/javascript.png'),
       ('Java', '17', 2, 'Lenguaje orientado a objetos utilizado ampliamente en aplicaciones empresariales.','https://i.postimg.cc/YCGs93j6/java.png'),
       ('C#', '9', 2, 'Lenguaje desarrollado por Microsoft para aplicaciones en el framework .NET.','https://i.postimg.cc/Rhn9MWpS/c.png'),
       ('React', '18.3.1', 2, 'Lenguaje interpretado conocido por su elegancia y simplicidad.','https://i.postimg.cc/qMY193Qz/react.png'),
       ('Next JS', '14.2.3', 2, 'Lenguaje interpretado conocido por su elegancia y simplicidad.','https://i.postimg.cc/d1BWXNSY/nextjs.png'),
       ('Node JS', 'V22.4.0', 2, 'Lenguaje interpretado conocido por su elegancia y simplicidad.','https://i.postimg.cc/MHps80hj/nodejs.png');

-- Inserts para bases de datos
INSERT INTO skills (skill_name, version, language_type, description, urlimage)
VALUES ('MySQL', '8.37', 1, 'Sistema de gestión de bases de datos relacional ampliamente utilizado.','https://i.postimg.cc/MG130p7X/mysql.png'),
       ('PostgreSQL', '16', 1, 'Sistema de gestión de bases de datos relacional con énfasis en extensibilidad y cumplimiento de estándares.','https://i.postimg.cc/brVmYDhV/postgresql.png'),
       ('MongoDB', '7.0.4', 1, 'Base de datos NoSQL orientada a documentos, escalable y flexible.','https://i.postimg.cc/0yTHJwJL/mongodb.png'),
       ('SQL Server', '3', 1, 'Biblioteca en forma de motor de base de datos SQL ligero y autónomo.','https://i.postimg.cc/ZqzVqzGm/sqlserver.png');

-- Inserts para herramientas de diseño
INSERT INTO skills (skill_name, version, language_type, description, urlimage)
VALUES ('HTML', '2021', 3, 'Software de edición de imágenes profesional.','https://i.postimg.cc/3W5hW3zg/html.png'),
       ('CSS', '2021', 3, 'Software de gráficos vectoriales.','https://i.postimg.cc/rsB7Vg7s/css.png');




SELECT JSON_ARRAYAGG(
           JSON_OBJECT(
               'id_skill', s.id_skill,
               'skill_name', s.skill_name,
               'version', s.version,
               'urlimage', s.urlimage,
               'language_type', JSON_OBJECT(
                   'id_langtype', lt.id_langtype,
                   'langtype_name', lt.langtype_name,
                   'urlimage', lt.urlimage
               ),
               'description', s.description
           )
       ) AS skills_json
FROM skills s
JOIN language_type lt ON s.language_type = lt.id_langtype;
