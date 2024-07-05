import React from "react";
import "./Curriculum.css";
import { icons } from "../../assets/assets";
import { Brightness1 } from "@mui/icons-material";

const Curriculum = () => {
  return (
    <div className="curricuum">
      <div className="curriculum-container">
        <div className="curriculum-lefth">
          <div className="curriculum-box-lefth"></div>
        </div>
        <div className="curriculum-right">
          <div className="photo">
            <img src={icons.mariosalazar} alt="" />
          </div>
          <h3>contacts</h3>
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
            <div className="cv-education">
              <h3>Education</h3>
              <div className="cv-education">
                <div className="cv-box-education">
                  <Brightness1 />
                  <div className="education">
                    <h4>Especialidad en Física Matemáticas</h4>
                    <p>Unidad Educativa Victor Manuel Peñaherrera</p>
                    <p className="year">2008-2013</p>
                    <p>Hugo Guzmán Lara, Ibarra, Ecuador</p>
                  </div>
                </div>
                <div className="cv-box-education">
                  <Brightness1 />
                  <div className="education">
                    <h4>Ingeniería en Software</h4>
                    <p>Ingeniería en Software</p>
                    <p className="year">2018-2024</p>
                    <p>Av. 17 de Julio 5-21, Ibarra</p>
                  </div>
                </div>
                <div className="cv-box-education">
                  <Brightness1 />
                  <div className="education">
                    <h4>Ingles B1</h4>
                    <p>La UEmprende EP</p>
                    <p className="year">2021 - 2022</p>
                    <p>Juan de Velasco 244, Ibarra</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="entertaiment">
              <h3>Entretenimiento</h3>
              <div className="cv-entertaiment">
                <div className="box-entertaiment">
                  <img src={icons.check} alt="" className="icon" />
                  <p>Futbol</p>
                </div>
                <div className="box-entertaiment">
                  <img src={icons.check} alt="" className="icon" />

                  <p>Atletismo</p>
                </div>
                <div className="box-entertaiment">
                  <img src={icons.check} alt="" className="icon" />

                  <p>Música</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
