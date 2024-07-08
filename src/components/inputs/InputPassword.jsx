import React, { useState } from "react";
import "./InputLabel.css"; // Importamos el archivo de estilos CSS
import { icons } from "../../assets/assets";

const InputPassword = ({
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
}) => {
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const response = validator(inputValue);
    setIsValid(response); // Update the validity state
    onChange(inputValue); // Pass the input value to
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`input-field  ${error ? "error" : ""} ${
            leftIcon ? "with-left-icon" : ""
          }`}
        />

        <div className="icon-container right-icon">
          {showPassword ? (
            <img
              src={icons.disable_eye}
              alt=""
              className="icon-input"
              onClick={handleTogglePassword}
            />
          ) : (
            <img
              src={icons.enable_eye}
              alt=""
              className="icon-input"
              onClick={handleTogglePassword}
            />
          )}
        </div>
      </div>
      {!isValid?.isValid && error === null && (
        <span className="error-message">{isValid?.msg}</span>
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputPassword;
