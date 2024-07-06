import "./Curriculum.css";
import {
  certifications,
  icons,
  skills_data,
  systems,
  vcs,
} from "../../assets/assets";
import { Brightness1 } from "@mui/icons-material";

const Curriculum = () => {
  const programming = skills_data.filter(
    (skill) => skill.language_type.id_langtype == 2
  );
  const database = skills_data.filter(
    (skill) => skill.language_type.id_langtype == 1
  );
  const design = skills_data.filter(
    (skill) => skill.language_type.id_langtype == 3
  );

  const certs = certifications;

  const versions = vcs;
  const oper_systems = systems;

  console.log(programming);

  return (
    <div className="cv">
      <h3 className="project-title">My Curriculum Vitae</h3>
      <div className="curriculum">
        <div className="curriculum-container">
          <div className="curriculum-lefth">
            <div className="curriculum-box-lefth">
              <div className="lefth">
                <div className="cv-about-me">
                  <div className="about-desc">
                    <h3>MARIO SALAZAR</h3>
                    <h4>Ingeniería en Software</h4>
                    <p>
                      Soy estudiante de la carrera de Ingeniería de Software,
                      actualmente estoy cursando el ultimo nivel de la
                      Universidad, mi enfoque es en el Desarrollo de Software
                      Frontend y Backend con lenguajes de programación Java,
                      Python, C# y otros, además, soy un apasionado por la
                      gestión de base de datos SQL (SQL Server, PostgreSQL,
                      MySQL) y no SQL. Tengo un enfoque por la resolución de
                      problemas complejos y creación de soluciones eficientes y
                      escalables con un enfoque de la mejora continua y el
                      aprendizaje de nuevas tecnologías, busco contribuir a
                      proyectos innovadores en un entorno colaborativo para
                      fomentar el crecimiento personal.
                    </p>
                  </div>
                  <div className="photo-head">
                    <img src={icons.mariosalazar} alt="" />
                  </div>
                </div>
                <div className="experience">
                  <h3>Experience</h3>
                  <div className="cv-box-education">
                    <div className="vineta">
                      <Brightness1 />
                    </div>
                    <div className="education">
                      <h4>Comercial Bedon</h4>
                      <p className="education-subtitle">
                        Customer Sales & Attention
                      </p>
                      <p className="year">2013 - 2017</p>
                      <div className="experience-description">
                        <p className="vin">*</p>
                        <p className="education-addreses">
                          Desarrollo de actividades de ventas de maquinarias
                          agrícolas y repuestos en general.
                        </p>
                      </div>
                      <div className="experience-description">
                        <p className="vin">*</p>
                        <p className="education-addreses">
                          Colaboración e interacción con los clientes y partes
                          interesadas, comprender sus necesidades y encontrar
                          las mejores soluciones.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cv-box-education">
                    <div className="vineta">
                      <Brightness1 />
                    </div>
                    <div className="education">
                      <h4>Empresa de Agua Potable y Alcantarillado EPAA-AA</h4>
                      <p className="education-subtitle">
                        Practicas Preprofesionales
                      </p>
                      <p className="year">2023 - 2024</p>
                      <div className="experience-description">
                        <p className="vin">*</p>
                        <p className="education-addreses">
                          Desarrollo, mejoramiento y soluciones a errores del
                          sistema para optimizar el rendimiento y la
                          escalabilidad.
                        </p>
                      </div>
                      <div className="experience-description">
                        <p className="vin">*</p>
                        <p className="education-addreses">
                          Interacción con el lenguaje de programación Java y
                          motores de base de datos SQL Server y PostgreSQL.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience">
                  <h3>Skills</h3>
                  <div className="skill-cont">
                    <div className="cv-skill-title">
                      <img
                        src={programming[0].language_type.urlimage}
                        alt=""
                        className="cv-icon-skill"
                      />
                      <h4>Lenguajes de Programación</h4>
                    </div>
                    <div className="subskills">
                      {programming.map((item, index) => (
                        <div key={index} className="cv-skill-container">
                          <img
                            src={item.urlimage}
                            alt=""
                            className="icon-menu"
                          />
                          <p className="skill-name">{item.skill_name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-cont">
                    <div className="cv-skill-title">
                      <img
                        src={database[0].language_type.urlimage}
                        alt=""
                        className="cv-icon-skill"
                      />
                      <h4>Gestión de base de datos</h4>
                    </div>
                    <div className="subskills">
                      {database.map((item, index) => (
                        <div key={index} className="cv-skill-container">
                          <img
                            src={item.urlimage}
                            alt=""
                            className="icon-menu"
                          />
                          <p className="skill-name">{item.skill_name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-cont">
                    <div className="cv-skill-title">
                      <img
                        src={design[0].language_type.urlimage}
                        alt=""
                        className="cv-icon-skill"
                      />
                      <h4>Design Language</h4>
                    </div>
                    <div className="subskills">
                      {design.map((item, index) => (
                        <div key={index} className="cv-skill-container">
                          <img
                            src={item.urlimage}
                            alt=""
                            className="icon-menu"
                          />
                          <p className="skill-name">{item.skill_name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-cont">
                    <div className="cv-skill-title">
                      <img
                        src={icons.versioncs}
                        alt=""
                        className="cv-icon-skill"
                      />
                      <h4>Version Control Systems</h4>
                    </div>
                    <div className="subskills">
                      {versions.map((item, index) => (
                        <div key={index} className="cv-skill-container">
                          <img src={item.image} alt="" className="icon-menu" />
                          <p className="skill-name">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-cont">
                    <div className="cv-skill-title">
                      <img src={icons.os} alt="" className="cv-icon-skill" />
                      <h4>Version Control Systems</h4>
                    </div>
                    <div className="subskills">
                      {oper_systems.map((item, index) => (
                        <div key={index} className="cv-skill-container">
                          <img src={item.image} alt="" className="icon-menu" />
                          <p className="skill-name">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="curriculum-right">
            <div className="photo">
              <img src={icons.mariosalazar} alt="" />
            </div>

            <hr />
            <h3>Contacts</h3>
            <div className="cv-contacts">
              <div className="cv-box-contacts">
                <img src={icons.phone} alt="" className="icon" />
                <p>+593-994-532-438</p>
              </div>
              <div className="cv-box-contacts">
                <img src={icons.email} alt="" className="icon" />
                <p>mariosalazar.ms.10@gmail.com</p>
              </div>
              <div className="cv-box-contacts">
                <img src={icons.github_white} alt="" className="icon" />
                <p>@gitmariosalazar</p>
              </div>
              <div className="cv-box-contacts">
                <img src={icons.location} alt="" className="icon" />
                <p>Ibarra - Imbabura - Ecuador</p>
              </div>
              <div className="cv-box-contacts">
                <img src={icons.linkedin} alt="" className="icon" />
                <p>@mario10salazar</p>
              </div>
              <hr />
              <div className="cv-education">
                <h3>Education</h3>
                <div className="cv-education">
                  <div className="cv-box-education">
                    <div className="vineta">
                      <Brightness1 />
                    </div>
                    <div className="education">
                      <h4>Especialidad en Física Matemáticas</h4>
                      <p className="education-subtitle">
                        Unidad Educativa Victor Manuel Peñaherrera
                      </p>
                      <p className="year">2008-2013</p>
                      <p className="education-addreses">
                        Hugo Guzmán Lara, Ibarra, Ecuador
                      </p>
                    </div>
                  </div>
                  <div className="cv-box-education">
                    <div className="vineta">
                      <Brightness1 />
                    </div>
                    <div className="education">
                      <h4>Ingeniería en Software</h4>
                      <p className="education-subtitle">
                        Ingeniería en Software
                      </p>
                      <p className="year">2018-2024</p>
                      <p className="education-addreses">
                        Av. 17 de Julio 5-21, Ibarra
                      </p>
                    </div>
                  </div>
                  <div className="cv-box-education">
                    <div className="vineta">
                      <Brightness1 />
                    </div>
                    <div className="education">
                      <h4>Ingles B1</h4>
                      <p className="education-subtitle">La UEmprende EP</p>
                      <p className="year">2021 - 2022</p>
                      <p className="education-addreses">
                        Juan de Velasco 244, Ibarra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="cv-entertaiment">
                <h3>Entretenimiento</h3>
                <div className="cv-entertaiment">
                  <div className="cv-box-entertaiment">
                    <img src={icons.rubik} alt="" className="icon-menu" />
                    <p>Futbol</p>
                  </div>
                  <div className="cv-box-entertaiment">
                    <img src={icons.rubik} alt="" className="icon-menu" />

                    <p>Atletismo</p>
                  </div>
                  <div className="cv-box-entertaiment">
                    <img src={icons.rubik} alt="" className="icon-menu" />

                    <p>Música</p>
                  </div>
                </div>
              </div>
              <div className="cv-entertaiment">
                <h3>Languages</h3>
                <div className="cv-entertaiment">
                  <div className="cv-box-entertaiment">
                    <img src={icons.language} alt="" className="icon-menu" />
                    <p>Spanish</p>
                  </div>
                  <div className="cv-box-entertaiment">
                    <img src={icons.language} alt="" className="icon-menu" />
                    <p>English</p>
                  </div>
                </div>
              </div>
              <div className="cv-entertaiment">
                <h3>Git Repositories</h3>
                <div className="cv-box-repo">
                  <img src={icons.github_white} alt="" className="icon" />
                  <a href="#">
                    <p>@gitmaario10salazarutn</p>
                  </a>
                </div>
                <div className="cv-box-repo">
                  <img src={icons.github_white} alt="" className="icon" />
                  <a href="#">
                    <p>@gitmaariosalazar</p>
                  </a>
                </div>
              </div>
              <div className="cv-entertaiment">
                <h3>Contact me</h3>
                <div className="social-icons-company">
                  <img src={icons.linkedin} alt="" className="icon" />
                  <img src={icons.phone} alt="" className="icon" />
                  <img src={icons.telegram} alt="" className="icon" />
                  <img src={icons.whatsapp} alt="" className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-box">
        <div className="experience exp-box">
          <h3>Certifications</h3>
          {certs.map((certificate, index) => (
            <div key={index} className="cv-box-education">
              <div className="vineta">
                <Brightness1 />
              </div>
              <div className="education">
                <h4>{certificate.title}</h4>
                <p className="education-subtitle">{certificate.subtitle}</p>
                <p className="year">Year: {certificate.year}</p>
                {certificate.details.map((det, ind) => (
                  <div key={ind} className="experience-description">
                    <p className="vin">*</p>
                    <p className="education-addreses">{det}</p>
                  </div>
                ))}
                <div className="experience-description">
                  <p className="vin">*</p>
                  <p className="education-addreses">
                    Colaboración e interacción con los clientes y partes
                    interesadas, comprender sus necesidades y encontrar las
                    mejores soluciones.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
