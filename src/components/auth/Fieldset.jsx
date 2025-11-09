import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Fieldset = ({
  label,
  type,
  id,
  placeholder,
  register,
  required,
  errors,
  password,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="fieldset">
      <label htmlFor={id}>{label}</label>
      <div className="input-container relative">
        <input
          id={id}
          name={id}
          type={
            type === "password" && !isPasswordVisible
              ? "password"
              : type === "date"
              ? "date"
              : "text"
          }
          className={`input p-2 focus:outline-none border-primary ${
            errors[id] ? "!border-red-500" : ""
          }`}
          placeholder={placeholder}
          {...register(id, {
            required: required?.value
              ? required?.message || "This field is required"
              : false,
            pattern:
              id === "email"
                ? {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  }
                : null,
            validate:
              id === "confirmPassword"
                ? (value) => value === password || "Passwords do not match"
                : "",
          })}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password"
          >
            <p className="absolute top-1/2 translate-y-[-50%] c-md:right-7 c-xsm:right-3 text-[19px] cursor-pointer">
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </p>
          </button>
        )}
      </div>

      {/* Display error message */}
      {errors[id] && (
        <span className="error-message">{errors[id]?.message}</span>
      )}
    </div>
  );
};

export default Fieldset;
