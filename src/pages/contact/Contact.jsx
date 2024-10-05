import "./Contact.css";
import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneOutlined,
  Send,
} from "@mui/icons-material";
import Location from "../../components/Location/Location";
import InputLabel from "../../components/inputs/InputLabel";
import TextArea from "../../components/inputs/TextArea";
import { icons } from "../../assets/assets";
import { useState } from "react";
import { useAuth } from "../../context/useAuth";

const Contact = () => {
  const { sendEmail } = useAuth();

  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleChangeName = async (e) => {
    setName(e.target.value);
  };


  const handleChangeFrom = async (e) => {
    setFrom(e.target.value);
  };

  const handleChangeSubject = async (e) => {
    setSubject(e.target.value);
  };

  const handleChangeMessage = async (e) => {
    setMessage(e.target.value);
  };

  const data = {
    name: name,
    from: from,
    to: "mariosalazar.ms.10@gmail.com",
    subject: subject,
    message: message
  }


    const onSubmit = (data) => {
      sendEmail(data);
    };

  return (
    <div className="contact" id="contact">
      <h3 className="contact-title">
        Contact Me
        <div className="underline-project">
          <span></span>
        </div>
      </h3>
      <div className="contact-box-container">
        <div className="contact-box-lefth">
          <div>
            <div className="contact-info">
              <div className="contact-icon">
                <LocationOnOutlined className="icon-s" />{" "}
              </div>
              <div className="box-address">
                <h3>Address</h3>
                <p>El Tejar - Via a Santa Rosa 19-40</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <PhoneOutlined className="icon-s" />
              </div>
              <div className="box-address">
                <h3>Contact Me</h3>
                <p>+593 994 532 438</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <EmailOutlined className="icon-s" />{" "}
              </div>
              <div className="box-address">
                <h3>Email Me</h3>
                <p>mariosalazar.ms.10@gmail.com</p>
              </div>
            </div>
            <div className="location">
              <Location />
            </div>
          </div>
        </div>

        <div className="contact-box-right">
          <div className="contact-header">
            <h3>Contact me now</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero
              sequi alias deleniti dignissimos voluptas voluptatem deserunt.
              Nemo quae similique vel fuga totam facilis voluptates quaerat
              quibusdam, corrupti earum id.
            </p>
          </div>
          <div className="form-box">
            <div className="input-horizantal-2">
              <div className="input-box">
                <InputLabel
                  type="text"
                  label="Your Name"
                  placeholder="Mario Salazar"
                  rightIcon={icons.user_icon}
                  onChange={handleChangeName}
                  name="name"
                  value={name}
                />
              </div>
              <div className="input-box">
                <InputLabel
                  type="text"
                  label="Your Email"
                  placeholder="mario@gmail.com"
                  rightIcon={icons.email}
                  name={from}
                  value={from}
                  onChange={handleChangeFrom}
                />
              </div>
            </div>
            <div className="input-horizontal-1">
              <div className="input-box">
                <InputLabel
                  type="text"
                  label="Your Subject"
                  placeholder="Subject Message"
                  name={subject}
                  value={subject}
                  onChange={handleChangeSubject}
                />
              </div>
            </div>
            <div className="input-horizontal-1">
              <div className="input-box">
                <TextArea
                  label="Message"
                  placeholder="Type your message here..."
                  name="message"
                  value={message}
                  onChange={handleChangeMessage}
                />
              </div>
            </div>
          </div>
          <div className="btn-sendmessage-box">
            <button
              className="btn-message"
              onClick={() => onSubmit(data)}
            >
              <Send /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
