import { School, SchoolTwoTone } from "@mui/icons-material";
import React from "react";
import { icons } from "../../assets/assets";
import "./Education.css";

const Education = () => {
  return (
    <div className="edu">
      <h3 className="project-title">
        Educations Page
        <div className="underline-project">
          <span></span>
        </div>
      </h3>
      <div className="edu-container">
        <div className="box-edu">
          <h3>My Educations</h3>
          <div className="edu-description">
            <h4>First Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellendus placeat rerum iste harum illo nam alias quae delectus
              fugiat{" "}
            </p>
          </div>
          <div className="edu-description">
            <h4>Second Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellendus placeat rerum iste harum illo nam alias quae delectus
              fugiat{" "}
            </p>
          </div>
          <div className="edu-images">
            <img src={icons.educationgif} alt="" />
            <img src={icons.backend} alt="" />
          </div>
        </div>
        <div className="box-edu">
          <h3>Educatons</h3>
          <div className="cv-education">
            <div className="cv-education">
              <div className="cv-box-education">
                <div className="vineta">
                  <SchoolTwoTone />
                </div>
                <div className="education">
                  <h4>Especialidad en Física Matemáticas</h4>
                  <p className="education-subtitle">
                    U.E Victor Manuel Peñaherrera
                  </p>
                  <p className="year">2008-2013</p>
                  <p className="education-addreses">
                    Hugo Guzmán Lara, Ibarra, Ecuador
                  </p>
                </div>
              </div>
              <div className="cv-box-education">
                <div className="vineta">
                  <SchoolTwoTone />
                </div>
                <div className="education">
                  <h4>Ingeniería en Software</h4>
                  <p className="education-subtitle">
                    Tecnica del Norte University
                  </p>
                  <p className="year">2018-2024</p>
                  <p className="education-addreses">
                    Av. 17 de Julio 5-21, Ibarra
                  </p>
                </div>
              </div>
              <div className="cv-box-education">
                <div className="vineta">
                  <SchoolTwoTone />
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
        </div>
        <div className="box-edu">
          <h3>I am Learning</h3>

          <div className="cv-education">
            <div className="cv-education">
              <div className="cv-box-education">
                <div className="vineta">
                  <img src={icons.react} alt="" className="icon-menu" />
                </div>
                <div className="education">
                  <h4>React Language Programming</h4>
                  <p className="education-subtitle">courses and self-study</p>
                  <p className="year">2024</p>
                  <p className="education-addreses">Education in progress...</p>
                </div>
              </div>
              <div className="cv-box-education">
                <div className="vineta">
                  <img src={icons.python} alt="" className="icon-menu" />
                </div>
                <div className="education">
                  <h4>Python Language Programming</h4>
                  <p className="education-subtitle">courses and self-study</p>
                  <p className="year">2024</p>
                  <p className="education-addreses">Education in progress...</p>
                </div>
              </div>
              <div className="cv-box-education">
                <div className="vineta">
                  <img src={icons.mongodb} alt="" className="icon-menu" />
                </div>
                <div className="education">
                  <h4>MongoDB Database</h4>
                  <p className="education-subtitle">courses and self-study</p>
                  <p className="year">2024</p>
                  <p className="education-addreses">Education in progress...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
