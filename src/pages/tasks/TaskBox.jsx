import { DeleteForever, EditNote } from "@mui/icons-material";
import { skills_data } from "../../assets/assets";
import "./TaskBox.css";

const projectsData = skills_data;
const TaskBox = () => {
  return (
    <div className="taskbox">
      <div className="taskbox-box-container">
        {projectsData.map((taskbox, index) => (
          <div key={index} className="taskbox-box">
            <h3>
              {taskbox.skill_name}
              <div className="underline-taskbox">
                <span></span>
              </div>
            </h3>

            <div className="box-footer-taskbox">
              <div className="taskbox-icons">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, velit? Qui aspernatur inventore facilis ducimus
                  ipsam natus eligendi earum incidunt.
                </p>
              </div>
            </div>
            <div className="taskbox-info">
              <div className="version">
                <h5>Task Date:</h5>
                <p>{"02-02-2024"}</p>
              </div>
              <div className="floating-icons-task">
                <button className="floating-link-task" title="View Code">
                  <EditNote className="icon-floating-task-edit" />
                </button>{" "}
                <button className="floating-link-task" title="View Code">
                  <DeleteForever className="icon-floating-task-delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBox;
