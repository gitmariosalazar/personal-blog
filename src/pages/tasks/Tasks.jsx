import TaskBox from "./TaskBox";
import "./Task.css";
import { icons } from "../../assets/assets";
import { AddTask } from "@mui/icons-material";

const Tasks = () => {
  return (
    <>
      <div className="task" id="tasks">
        <h3 className="contact-title">
          My tasks (Private Page - no correct yet)
          <div className="underline-project">
            <span></span>
          </div>
        </h3>
        <div className="task-box-container">
          <div className="task-box-right">
            <div className="task-box">
              <TaskBox />
            </div>
          </div>
        </div>
      </div>
      <div className="cv-btn-task-box">
        <button className="cv-btn-task">
          <AddTask className="icon-menu" title="CV Download PDF" />

          <p>Add Task</p>
        </button>
      </div>
    </>
  );
};

export default Tasks;
