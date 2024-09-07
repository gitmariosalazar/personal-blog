import { icons, projects_data } from "../../assets/assets";
import "./Projects.css";
import DemoCarousel from "../../components/carousel/Carousel";
import { ToastCustom } from "../../components/ui/ToastCustom";

const projectsData = projects_data;
const Projects = () => {
  return (
    <div className="project" id="projects">
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
                  title={project.gitUrl ? "View Code" : "No Code yet"}
                  target="_blank"
                  onClick={() => {
                    if (project.previewUrl == null) {
                      ToastCustom(
                        "info",
                        "Project have not code yet",
                        "Message Info",
                        "top-right"
                      );
                    }
                  }}
                >
                  <img
                    src={icons.code}
                    alt=""
                    className="icon-floating cursor-pointer"
                  />
                </a>
                <a
                  href={project.previewUrl}
                  className="floating-link"
                  title={
                    project.previewUrl ? "Live Preview" : "No Live Preview"
                  }
                  target="_blank"
                  onClick={() => {
                    if (project.previewUrl == null) {
                      ToastCustom(
                        "info",
                        "Project have not live preview yet",
                        "Message Info",
                        "top-right"
                      );
                    }
                  }}
                >
                  <img
                    src={icons.globe}
                    alt=""
                    className="icon-floating cursor-pointer"
                  />
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
