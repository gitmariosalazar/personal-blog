import React, { useState } from "react";
import "./InputDate.css"; // Importamos el archivo de estilos CSS

const InputDate = ({
  label,
  type = "date",
  placeholder,
  required = false,
  onChange,
  value,
  validator = () => {},
  name,
  error,
  resetError,
  leftIcon,
  rightIcon,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const response = validator(inputValue);
    setIsValid(response);
    onChange(event);
  };

  return (
    <div>
      <label className="input-label-date">{label}</label>
      <div className="input-container-date">
        {leftIcon && (
          <div className="icon-container-date left-icon-date">
            <img src={leftIcon} alt="" className="icon-input" />
          </div>
        )}
        <input
          onFocus={resetError}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`input-field-date ${error ? "error-date" : ""} ${
            leftIcon ? "with-left-icon-date" : ""
          }`}
        />
        {rightIcon && (
          <div className="icon-container-date right-icon-date">
            <img src={rightIcon} alt="" className="icon-input" />
          </div>
        )}
      </div>
      {!isValid?.isValid && error === null && (
        <span className="error-message-date">{isValid?.msg}</span>
      )}
      {error && <span className="error-message-date">{error}</span>}
    </div>
  );
};

export default InputDate;
