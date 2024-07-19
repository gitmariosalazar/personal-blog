import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastdemo.css";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { MdCancel, MdError } from "react-icons/md";

const CustomToast = ({ title, icon, message }) => {
  let IconComponent;
  switch (icon) {
    case "success":
      IconComponent = FaCheckCircle;
      break;
    case "info":
      IconComponent = FaInfoCircle;
      break;
    case "warning":
      IconComponent = TiWarning;
      break;
    case "error":
      IconComponent = MdError;
      break;
    case "dark":
      IconComponent = FaCheckCircle;
      break;
    default:
      IconComponent = MdCancel;
  }

  return (
    <div className="container-toast">
      <div className="icon-toast pulse">
        <span className="material-symbols-outlined">
          <IconComponent />
        </span>
      </div>
      <div className="body-toast">
        <div className="title-toast">
          <p>{title}</p>
        </div>
        <div className="message-toast">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param {string} theme Theme name to apply: success, info, error or warning (type: String)
 * @param {string} message Enter a message (type: String)
 * @param {string} title Enter a title to the message (type: String)
 * @param {string} position Enter a position to the message (type: string)
 */
const ToastCustom = (theme, message, title, position) => {
  toast(
    <CustomToast text={message} title={title} icon={theme} message={message} />,
    {
      position: position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: theme,
      progress: undefined,
    }
  );
};

export { ToastCustom };
