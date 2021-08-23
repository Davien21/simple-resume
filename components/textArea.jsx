import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
  const textAreaClassName = !error ? "default_style" : "default_style error";
  const errorClassName = !error ? "" : "error-message";

  return (
    <div className="form-group mt-2">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...rest}
        name={name}
        // placeholder={label}
        id={name}
        rows="2"
        className={textAreaClassName}
      ></textarea>
      {error && <div className={errorClassName}>{error}</div>}
    </div>
  );
};

export default TextArea;
