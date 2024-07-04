import { icons } from "../../assets/assets";
import "./SkillBox.css";

const projectsData = [
  {
    id: 1,
    title: "React ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?",
    image: "/images/projects/1.png",
    tools: [icons.react],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Shopping ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.java],
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    image: "/images/projects/3.png",
    tools: [icons.prisma],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gitmariosalazar/e-shop",
    previewUrl: "https://e-shop-mariosalazar.vercel.app",
  },
  {
    id: 4,
    title: " Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    image: "/images/projects/4.png",
    tools: [icons.mongodb],
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "MongoDB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.nodejs],
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: " MySQL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.mysql],
    image: "/images/projects/pythonmysql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.postgresql],
    image: "/images/projects/pythonpostgresql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "SQL Server",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,                commodi? Lorem ipsum dolor sit amet consectetur adipisicing                elit. Minus, commodi?",
    tools: [icons.python],
    image: "/images/projects/pythonsqlserver.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const SkillBox = () => {
  return (
    <div className="skillbox">
      <div className="skillbox-box-container">
        {projectsData.map((skillbox, index) => (
          <div key={index} className="skillbox-box">
            <h3>
              {skillbox.title}
              <div className="underline-skillbox">
                <span></span>
              </div>
            </h3>
            <div className="skillbox-info">
              <p>Lorem ipsum dolor</p>
              <div className="floating-icons">
                <a
                  href={skillbox.gitUrl}
                  className="floating-link"
                  title="View Code"
                  target="_blank"
                >
                  <img src={icons.code} alt="" className="icon-floating" />
                </a>
              </div>
            </div>
            <div className="box-footer-skillbox">
              <div className="skillbox-icons">
                {skillbox.tools.map((tool, index) => (
                  <img
                    key={index}
                    src={tool}
                    alt=""
                    className="skillbox-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
