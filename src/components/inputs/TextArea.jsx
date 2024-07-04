import React from "react";
import "./TextArea.css"; // Archivo CSS para estilos opcionales

const TextArea = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="textarea-with-label">
      <label className="label">{label}</label>
      <textarea
        className="textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
      />
    </div>
  );
};

export default TextArea;
