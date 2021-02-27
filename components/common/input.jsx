import Text from "../typography/text";
import classNames from "classnames";
import { useState } from "react";

export default function Input({ label, arr, custom }) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  let inputClassess = classNames({
    "relative w-full text-1.75 leading-2.875 font-encode-sans transition-colors duration-200 ease-out border-dashed border-b-2 focus:border-black focus:outline-none": true,
    "border-input-red focus:border-input-red text-input-red": error,
  });

  inputClassess += custom ? " " + custom : "";

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    return re.test(String(phone).toLowerCase());
  };
  
  return (
    <label htmlFor={arr.name} className="md:flex h-full">
      <Text size="p" custom="text-1.75 leading-2.875 font-encode-sans">
        {label ? label : ""}
      </Text>
      <div className="relative mb-12">
        <input
          className={inputClassess}
          onFocus={(e) => (e.target.placeholder = "")}
          onChange={(e) => {
            e.target.placeholder = arr.placeholder;

            if (arr.type === "email") {
              if (!validateEmail(e.target.value)) {
                setError(true);
                setMessage("Niepoprawny mail");
              } else {
                setError(false);
                setMessage("");
              }
            }

            if (arr.type === "phone") {
              if (!validatePhone(e.target.value)) {
                setError(true);
                setMessage("Niepoprawny telefon");
              } else {
                setError(false);
                setMessage("");
              }
            }

            if (e.target.value.length === 0) {
              setError(false);
              setMessage("");
            }
          }}
          // onChange={(e) => {
          //   if (arr.type === "phone") {
          //     let text = e.target.value.slice();
          //     text = text.replace(/\s/g, "");
          //
          //     if (
          //       text.length % 3 === 0 &&
          //       text.length !== 9 &&
          //       text.length !== 0
          //     ) {
          //       e.target.value += " ";
          //     }
          //   }
          // }}
          type={arr.type ? arr.type : "text"}
          id={arr.id}
          name={arr.name}
          autoComplete="off"
          autoFocus="off"
          placeholder={arr.placeholder}
          required={arr.required}
        />
        <div
          className="uppercase text-input-red font-bold text-0.625 absolute -bottom-5 right-0"
          style={{ display: error ? "block" : "none" }}
        >
          {message}
        </div>
      </div>
    </label>
  );
}
