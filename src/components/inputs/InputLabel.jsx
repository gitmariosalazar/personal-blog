import React from "react";
import "./InputLabel.css"; // Archivo CSS para estilos opcionales

const InputLabel = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="input-with-label">
      <label className="label">{label}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabel;
