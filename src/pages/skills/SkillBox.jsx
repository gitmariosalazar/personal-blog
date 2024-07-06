import { skills_data } from "../../assets/assets";
import "./SkillBox.css";

const projectsData = skills_data;

const SkillBox = () => {
  return (
    <div className="skillbox">
      <div className="skillbox-box-container">
        {projectsData.map((skillbox, index) => (
          <div key={index} className="skillbox-box">
            <h3>
              {skillbox.skill_name}
              <div className="underline-skillbox">
                <span></span>
              </div>
            </h3>

            <div className="box-footer-skillbox">
              <div className="skillbox-icons">
                <img
                  key={index}
                  src={skillbox.urlimage}
                  alt=""
                  className="skillbox-icon"
                />
              </div>
            </div>
            <div className="skillbox-info">
              <div className="version">
                <h5>Version:</h5>
                <p>{skillbox.version}</p>
              </div>
              <div className="floating-icons">
                <a
                  href={skillbox.id_skill}
                  className="floating-link"
                  title="View Code"
                  target="_blank"
                >
                  <img
                    src={skillbox.language_type.urlimage}
                    alt={skillbox.language_type.langtype_name}
                    title={skillbox.language_type.langtype_name}
                    className="icon-floating"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
