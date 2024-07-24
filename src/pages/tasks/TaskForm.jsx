import { useState } from "react";
import InputLabel from "../../components/inputs/InputLabel";
import TextArea from "../../components/inputs/TextArea";
import { icons } from "../../assets/assets";
import InputDate from "../../components/inputs/InputDate";
import { AddTask, CancelRounded } from "@mui/icons-material";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date(0));
  const [description, setDescription] = useState("");
  const handleChangeTitle = async (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDate = async (e) => {
    setDate(e.target.value);
  };
  const handleChangeDescription = async (e) => {
    setDescription(e.target.value);
  };

  console.log({ title, date, description });

  return (
    <div className="task-form">
      <div className="task-form-container">
        <div className="close-form">
          <button className="close">
            <CancelRounded className="cancel" />
          </button>
        </div>
        <h3 className="project-title">
          Task Form
          <div className="underline-project">
            <span></span>
          </div>
        </h3>
        <div className="task-container">
          <div className="input-box">
            <InputLabel
              name="title"
              value={title}
              onChange={handleChangeTitle}
              type="text"
              placeholder="My first Task"
              label={"Task title"}
              rightIcon={icons.title}
            />
          </div>
          <div className="input-box">
            <InputDate
              name="date"
              value={date}
              onChange={handleChangeDate}
              type="date"
              placeholder={"02/02/2024"}
              label={"Date Task"}
            />
          </div>
          <div className="input-box">
            <TextArea
              name="description"
              value={description}
              onChange={handleChangeDescription}
              type="text"
              placeholder={"Description obout your task"}
              label={"Description Task"}
            />
          </div>

          <div className="btn-task">
            <button className="cv-btn-task">
              <AddTask className="icon-menu" />
              <p>Add Task</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
