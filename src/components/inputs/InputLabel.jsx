import React, { useState } from "react";
import "./InputLabel.css"; // Importamos el archivo de estilos CSS

const InputLabel = ({
  label,
  type,
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
      <label className="input-label">{label}</label>
      <div className="input-container relative">
        {leftIcon && (
          <div className="icon-container left-icon">
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
          className={`input-field  ${error ? "error" : ""} ${
            leftIcon ? "with-left-icon" : ""
          }`}
        />
        {rightIcon && (
          <div className="icon-container right-icon">
            <img src={rightIcon} alt="" className="icon-input" />
          </div>
        )}
      </div>
      {!isValid?.isValid && error === null && (
        <span className="error-message">{isValid?.msg}</span>
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputLabel;
