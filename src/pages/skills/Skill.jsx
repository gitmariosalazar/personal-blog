import { icons } from "../../assets/assets";
import "./Skill.css";
import SkillBox from "./SkillBox";
import { Code } from "@mui/icons-material";

const Skill = () => {
  return (
    <>
      <div className="skill">
        <h3 className="contact-title">
          My Skills
          <div className="underline-project">
            <span></span>
          </div>
        </h3>
        <div className="contact-box-container">
          <div className="skill-box-lefth">
            <div>
              <div className="contact-info">
                <div className="contact-icon">
                  <Code className="icon-s" />{" "}
                </div>
                <div className="box-address">
                  <h3>Backend & Development Skills</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam ex reprehenderit praesentium perspiciatis,
                    voluptatum exercitationem.
                  </p>
                </div>
              </div>
              <div className="location">
                <img src={icons.backend} alt="" />
              </div>
            </div>
          </div>

          <div className="skill-box-right">
            <div className="skill-box">
              <SkillBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
