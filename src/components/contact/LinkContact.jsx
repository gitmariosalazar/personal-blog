import { Brightness1 } from "@mui/icons-material";
import React from "react";
import { certifications } from "../../assets/assets";

const LinkContact = () => {
  return (
    <div id="certification">
      <div className="experience-box">
        <div className="experience exp-box">
          <h3>Certifications Link To</h3>
          {certifications.map((certificate, index) => (
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

export default LinkContact;
